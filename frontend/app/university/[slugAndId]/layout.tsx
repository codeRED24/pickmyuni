import { Metadata } from "next";

interface University {
  id: number;
  college_name: string;
  slug: string;
  city?: {
    name: string;
  };
  state?: {
    name: string;
  };
  description?: string;
  logo_url?: string;
  location?: string;
}

async function fetchUniversity(id: number): Promise<University | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/college/${id}`,
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch university: ${response.status}`);
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching university:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugAndId: string }>;
}): Promise<Metadata> {
  const { slugAndId } = await params;

  const parts = slugAndId.split("-");
  const id = parts.pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "University Not Found | PickMyUni",
      description:
        "The requested university could not be found. Explore other universities in Australia.",
    };
  }

  const university = await fetchUniversity(Number(id));

  if (!university) {
    return {
      title: "University Not Found | PickMyUni",
      description:
        "The requested university could not be found. Explore other universities in Australia.",
    };
  }

  const locationString =
    university.city?.name && university.state?.name
      ? `${university.city.name}, ${university.state.name}`
      : university.state?.name || university.location || "Australia";

  return {
    title: `${university.college_name} | PickMyUni - University Information, Courses & Admission`,
    description: `Discover ${university.college_name} in ${locationString}. Get comprehensive information about courses, fees, admission requirements, rankings, and more at this top Australian university.`,
    keywords: [
      university.college_name,
      `${university.college_name} university`,
      `${university.college_name} courses`,
      `${university.college_name} admission`,
      `${university.college_name} fees`,
      `study at ${university.college_name}`,
      `${university.college_name} Australia`,
      ...(university.city?.name ? [`${university.college_name} ${university.city.name}`] : []),
      "Australian university",
      "international students",
      "higher education Australia",
    ],
    openGraph: {
      title: `${university.college_name} | PickMyUni`,
      description: `Discover ${university.college_name} - comprehensive university information, courses, and admission details.`,
      type: "website",
      images: university.logo_url
        ? [{ url: university.logo_url, width: 400, height: 400 }]
        : [],
    },
    twitter: {
      card: "summary",
      title: `${university.college_name} | PickMyUni`,
      description: `Discover ${university.college_name} - comprehensive university information and courses.`,
      images: university.logo_url ? [university.logo_url] : [],
    },
  };
}

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
