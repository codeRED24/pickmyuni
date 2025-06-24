import ComaprisonComponent from "@/components/university-comparison";
import { Metadata } from "next";

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
  return <ComaprisonComponent />;
}
