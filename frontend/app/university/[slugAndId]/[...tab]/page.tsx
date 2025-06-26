import React from "react";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

const validTabs = [
  "info",
  "courses",
  "departments",
  "careers",
  "ranking",
  "fees",
  "scholarships",
  "placement",
  "faqs",
];

// Helper function to map tab names to API endpoints
const getEndpointForTab = (tab: string, id: number): string | null => {
  const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

  const endpointMap: { [key: string]: string | null } = {
    info: `${baseUrl}/api/v1/college/info/${id}`,
    courses: `${baseUrl}/api/v1/college/courses/${id}`,
    departments: `${baseUrl}/api/v1/college/departments/${id}`,
    careers: `${baseUrl}/api/v1/college/careers/${id}`,
    ranking: `${baseUrl}/api/v1/college/ranking/${id}`,
    fees: `${baseUrl}/api/v1/college/fees/${id}`,
    scholarships: `${baseUrl}/api/v1/college/scholarships/${id}`,
    faqs: `${baseUrl}/api/v1/college/faqs/${id}`,
    placement: `${baseUrl}/api/v1/college/placement/${id}`,
  };

  return endpointMap[tab] || null;
};

// Helper function to extract content from API response
const extractTabContent = (tab: string, data: any): any[] => {
  switch (tab) {
    case "info":
      return data.info_content || [];
    case "courses":
      // For courses, combine course_content and courses list
      const content = [];
      if (data.course_content) {
        content.push(data.course_content);
      }
      if (data.courses && data.courses.length > 0) {
        content.push({
          title: "Available Courses",
          content: `
            <div class="grid gap-4">
              ${data.courses
                .map(
                  (course: any) => `
                <div class="border rounded-lg p-4">
                  <h4 class="font-semibold text-brand-primary">Course ID: ${course.course_id}</h4>
                  <p class="text-gray-600">College ID: ${course.college_id}</p>
                </div>
              `
                )
                .join("")}
            </div>
          `,
        });
      }
      return content;
    case "departments":
      return data.department ? [data.department] : [];
    case "careers":
      return data.career ? [data.career] : [];
    case "ranking":
      return data.rankings ? [data.rankings] : [];
    case "fees":
      return data.fees ? [data.fees] : [];
    case "scholarships":
      return data.scholarship ? [data.scholarship] : [];
    case "placement":
      return data.placement ? [data.placement] : [];
    case "faqs":
      return data.faq ? [data.faq] : [];
    default:
      return [];
  }
};

// Server-side data fetching function for tab content
async function getTabData(tab: string, id: number) {
  try {
    const endpoint = getEndpointForTab(tab, id);

    if (!endpoint) {
      return {
        info: [
          {
            title: `${tab.charAt(0).toUpperCase() + tab.slice(1)} Information`,
            content: `${
              tab.charAt(0).toUpperCase() + tab.slice(1)
            } information will be available soon. Please check back later.`,
          },
        ],
        error: null,
      };
    }

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${tab} information: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      const content = extractTabContent(tab, data.data);
      return { info: content, error: null };
    } else {
      throw new Error(data.message || `Failed to fetch ${tab} information`);
    }
  } catch (error) {
    console.error(`Error fetching ${tab} data:`, error);
    return {
      info: [],
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
}

async function TabPage({
  params,
}: {
  params: Promise<{ slugAndId: string; tab: string[] }>;
}) {
  const { slugAndId, tab } = await params;
  const currentTab = tab?.[0] || "info";

  // Validate tab
  if (!validTabs.includes(currentTab)) {
    redirect(`/university/${slugAndId}/info`);
  }

  const id = slugAndId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  // Fetch tab data server-side
  const { info, error } = await getTabData(currentTab, Number(id));

  // Error state
  if (error) {
    return (
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="text-red-600 p-4 bg-red-50 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  // Empty state
  if (!info || info.length === 0) {
    return (
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="text-gray-500 p-4 bg-gray-50 rounded-lg">
          No {currentTab} information found for this university
        </div>
      </div>
    );
  }

  // Render tab content
  return (
    <div className="p-2 sm:p-4 lg:p-6">
      <div className="space-y-6">
        {info.map((item, index) => (
          <div key={index} className="p-6">
            {item?.content && (
              <div
                className="prose max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Generate metadata for each tab
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugAndId: string; tab: string[] }>;
}): Promise<Metadata> {
  const { slugAndId, tab } = await params;
  const currentTab = tab?.[0] || "info";
  const id = slugAndId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "University Not Found",
      description: "The requested university could not be found.",
    };
  }

  // Get university name from slugAndId for better SEO
  const universityName = slugAndId
    .split("-")
    .slice(0, -1)
    .join(" ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const tabTitles = {
    info: "Information",
    courses: "Courses",
    departments: "Departments",
    careers: "Careers",
    ranking: "Rankings",
    fees: "Fees",
    scholarships: "Scholarships",
    placement: "Placements",
    faqs: "FAQs",
  };

  const tabTitle =
    tabTitles[currentTab as keyof typeof tabTitles] || "Information";

  return {
    title: `${universityName} ${tabTitle} - PickMyUni`,
    description: `Explore ${tabTitle.toLowerCase()} for ${universityName}. Get detailed information about this Australian university.`,
    openGraph: {
      title: `${universityName} ${tabTitle} - PickMyUni`,
      description: `Explore ${tabTitle.toLowerCase()} for ${universityName}. Get detailed information about this Australian university.`,
      url: `https://pickmyuni.com/university/${slugAndId}/${currentTab}`,
      siteName: "PickMyUni",
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${universityName} ${tabTitle} - PickMyUni`,
      description: `Explore ${tabTitle.toLowerCase()} for ${universityName}. Get detailed information about this Australian university.`,
    },
  };
}

export default TabPage;
