import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Find Universities in Australia | PickMyUni - Compare Top Australian Universities",
  description:
    "Discover and compare top universities in Australia. Search by location, courses, fees, and rankings. Find the perfect Australian university for your higher education journey.",
  keywords: [
    "Australian universities",
    "university search Australia",
    "compare universities",
    "study in Australia",
    "international students Australia",
    "university rankings Australia",
    "higher education Australia",
    "university fees Australia",
    "university courses Australia",
  ],
  openGraph: {
    title: "Find Universities in Australia | PickMyUni",
    description:
      "Discover and compare top universities in Australia. Find the perfect university for your studies.",
    type: "website",
  },
};

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const universityListingSchema = combineSchemas(
    generateBreadcrumbSchema([
      { name: "Home", url: "https://pickmyuni.com" },
      { name: "Universities", url: "https://pickmyuni.com/university" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": "https://pickmyuni.com/university#webpage",
      url: "https://pickmyuni.com/university",
      name: "Universities in Australia",
      description:
        "Discover and compare top universities in Australia. Search by location, courses, fees, and rankings.",
      isPartOf: {
        "@id": "https://pickmyuni.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "Australian Universities",
        description: "Higher education institutions in Australia",
      },
    }
  );

  return (
    <>
      <JsonLd data={universityListingSchema} />
      {children}
    </>
  );
}
