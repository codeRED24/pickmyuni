import AboutPage from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PickMyUni - Your Guide to Australian Universities",
  description:
    "Learn about PickMyUni's mission to help international students find the perfect Australian university. Discover our commitment to simplifying university search and application processes.",
  keywords: [
    "about PickMyUni",
    "Australian university guide",
    "international student services",
    "university search platform",
    "study in Australia",
  ],
  openGraph: {
    title: "About Us | PickMyUni",
    description:
      "Learn about PickMyUni's mission to help international students find the perfect Australian university.",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
