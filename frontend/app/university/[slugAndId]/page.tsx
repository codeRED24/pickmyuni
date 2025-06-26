import React from "react";
import { notFound, redirect } from "next/navigation";

// Server-side data fetching function
async function getUniversityData(id: number) {
  try {
    // Use internal API URL for server-side requests if available, otherwise fallback to public URL
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
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

async function CollegePage({
  params,
}: {
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

  // Redirect to the info tab by default
  redirect(`/university/${slugAndId}/info`);
}

export default CollegePage;
