import { Metadata } from "next";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/home/Hero"));
const UniversitiesSection = dynamic(
  () => import("@/components/home/universities")
);
const CostComparisonSection = dynamic(
  () => import("@/components/home/costComparison")
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials")
);
const ProcessSection = dynamic(() => import("@/components/home/process"));
const ArticlesSection = dynamic(() => import("@/components/home/articles"));

export const metadata: Metadata = {
  title:
    "PickMyUni - Find the Perfect Australian University for International Students",
  description:
    "Discover and compare top Australian universities. Get expert guidance on courses, fees, admission requirements, and student services. Your gateway to studying in Australia starts here.",
  keywords: [
    "Australian universities",
    "study in Australia",
    "international students Australia",
    "university comparison Australia",
    "higher education Australia",
    "university admission Australia",
    "Australian education",
    "study abroad Australia",
    "university search",
    "student visa Australia",
    "university rankings Australia",
  ],
  openGraph: {
    title: "PickMyUni - Find the Perfect Australian University",
    description:
      "Discover and compare top Australian universities. Your gateway to studying in Australia.",
    type: "website",
    url: "https://pickmyuni.com",
    siteName: "PickMyUni",
  },
  twitter: {
    card: "summary_large_image",
    title: "PickMyUni - Find the Perfect Australian University",
    description:
      "Discover and compare top Australian universities. Your gateway to studying in Australia.",
  },
  alternates: {
    canonical: "https://pickmyuni.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UniversitiesSection />
      <CostComparisonSection />
      <TestimonialsSection />
      <ProcessSection />
      <ArticlesSection />
    </main>
  );
}
