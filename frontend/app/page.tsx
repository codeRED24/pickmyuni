import ArticlesSection from "@/components/home/articles";
import CostComparisonSection from "@/components/home/costComparison";
import HeroSection from "@/components/home/Hero";
import ProcessSection from "@/components/home/process";
import TestimonialsSection from "@/components/home/testimonials";
import UniversitiesSection from "@/components/home/universities";

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
