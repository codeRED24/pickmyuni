import ContactPage from "@/components/contactpage";
import { Metadata } from "next";

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
  return (
    <>
      <ContactPage />
    </>
  );
}
