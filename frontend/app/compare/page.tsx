import ComaprisonComponent from "@/components/university-comparison";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/jsonld";

export const metadata: Metadata = {
  title:
    "Compare Universities | PickMyUni - Find Your Perfect Australian University",
  description:
    "Compare top Australian universities side by side. Analyze fees, courses, rankings, and facilities to make an informed decision about your higher education in Australia.",
  keywords: [
    "compare universities Australia",
    "university comparison tool",
    "Australian university rankings",
    "university fees comparison",
    "study abroad comparison",
    "higher education Australia",
  ],
  openGraph: {
    title: "Compare Universities | PickMyUni",
    description:
      "Compare top Australian universities side by side. Find the perfect university for your studies in Australia.",
    type: "website",
  },
};

export default function Page() {
  const comparePageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { name: "Home", url: "https://pickmyuni.com" },
      { name: "Compare Universities", url: "https://pickmyuni.com/compare" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://pickmyuni.com/compare#webpage",
      url: "https://pickmyuni.com/compare",
      name: "Compare Universities in Australia",
      description:
        "Compare top Australian universities side by side. Analyze fees, courses, rankings, and facilities.",
      isPartOf: {
        "@id": "https://pickmyuni.com/#website",
      },
      about: {
        "@type": "Thing",
        name: "University Comparison Tool",
        description: "Educational comparison tool for Australian universities",
      },
    }
  );

  return (
    <>
      <JsonLd data={comparePageSchema} />
      <ComaprisonComponent />
    </>
  );
}
