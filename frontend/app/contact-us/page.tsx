import ContactPage from "@/components/contactpage";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { generateBreadcrumbSchema, combineSchemas } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact Us | PickMyUni - Get Expert University Guidance",
  description:
    "Get in touch with PickMyUni for personalized university guidance, admission assistance, and expert advice for studying in Australia. We're here to help you succeed.",
  keywords: [
    "contact PickMyUni",
    "university admission help",
    "study abroad assistance",
    "Australian university guidance",
    "international student support",
    "education consultancy",
  ],
  openGraph: {
    title: "Contact Us | PickMyUni",
    description:
      "Get expert guidance for your Australian university journey. Contact our team for personalized assistance.",
    type: "website",
  },
};

export default function Page() {
  const contactPageSchema = combineSchemas(
    generateBreadcrumbSchema([
      { name: "Home", url: "https://pickmyuni.com" },
      { name: "Contact Us", url: "https://pickmyuni.com/contact-us" },
    ]),
    {
      "@type": "ContactPage",
      "@id": "https://pickmyuni.com/contact-us#webpage",
      url: "https://pickmyuni.com/contact-us",
      name: "Contact PickMyUni",
      description:
        "Get in touch with PickMyUni for personalized university guidance, admission assistance, and expert advice for studying in Australia.",
      isPartOf: {
        "@id": "https://pickmyuni.com/#website",
      },
      mainEntity: {
        "@id": "https://pickmyuni.com/#organization",
      },
    }
  );

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactPage />
    </>
  );
}
