import React from "react";
import { notFound } from "next/navigation";
import UniLayout from "@/components/university/UniLayout";
import QuickFacts from "@/components/QuickFacts";
import JsonLd from "@/components/JsonLd";
import {
  generateUniversitySchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/jsonld";
import { Metadata } from "next";
import TabsWithUrlContainer from "../../../components/university/TabsWithUrlContainer";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugAndId: string }>;
}): Promise<Metadata> {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "University Not Found",
      description: "The requested university could not be found.",
    };
  }

  const { college } = await getUniversityData(Number(id));

  if (!college) {
    return {
      title: "University Not Found",
      description: "The requested university could not be found.",
    };
  }

  return {
    title: `${college.college_name} - PickMyUni`,
    description:
      college.description ||
      `Learn more about ${college.college_name}, one of Australia's leading universities.`,
    openGraph: {
      title: `${college.college_name} - PickMyUni`,
      description:
        college.description ||
        `Learn more about ${college.name}, one of Australia's leading universities.`,
      url: `https://pickmyuni.com/university/${slugAndId}`,
      siteName: "PickMyUni",
      images: [
        {
          url: college.logo_url || college.bg_url,
          width: 1200,
          height: 630,
          alt: `${college.college_name} logo`,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${college.college_name} - PickMyUni`,
      description:
        college.description ||
        `Learn more about ${college.name}, one of Australia's leading universities.`,
      images: [college.logo_url || college.bg_url],
    },
  };
}

// Server-side data fetching function
async function getUniversityData(id: number) {
  try {
    // Use internal API URL for server-side requests if available, otherwise fallback to public URL
    const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseUrl}/api/v1/college/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        return { college: null, error: null };
      }
      throw new Error(`Failed to fetch university data: ${response.status}`);
    }

    const data = await response.json();
    return { college: data.data, error: null };
  } catch (error) {
    console.error("Error fetching university:", error);
    return {
      college: null,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch university data",
    };
  }
}

export default async function UniversityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slugAndId: string }>;
}) {
  const { slugAndId } = await params;
  const id = slugAndId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const { college, error } = await getUniversityData(Number(id));

  if (error) return <div>Error: {error}</div>;
  if (!college) {
    notFound();
    return null;
  }

  return (
    <>
      {college && (
        <JsonLd
          data={combineSchemas(
            generateUniversitySchema({
              name: college.college_name,
              description: `Learn more about ${college.college_name}, one of Australia's leading universities.`,
              url: `https://pickmyuni.com/university/${slugAndId}`,
              logo: college.logo_url || college.bg_url,
            }),
            generateBreadcrumbSchema([
              { name: "Home", url: "https://pickmyuni.com" },
              { name: "Universities", url: "https://pickmyuni.com/university" },
              {
                name: college.college_name,
                url: `https://pickmyuni.com/university/${slugAndId}`,
              },
            ])
          )}
        />
      )}
      <UniLayout college={college} slugAndId={slugAndId} />

      <div className="min-h-screen container mx-auto py-6 flex flex-col lg:flex-row-reverse gap-6">
        <QuickFacts college={college} />
        <div className="flex-1 min-w-0">
          <TabsWithUrlContainer id={id!} slugAndId={slugAndId} />
          {children}
        </div>
      </div>
    </>
  );
}
