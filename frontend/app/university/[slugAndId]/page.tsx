"use client";

import { useUniversity } from "@/hooks/useUniversity";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Universitytabs from "@/components/university/Universitytabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import UniLayout from "@/components/university/UniLayout";
import CollegeSkeleton from "@/components/skeleton/college-skeleton";
import QuickFacts from "@/components/QuickFacts";

const indexes = [
  "info",
  "courses",
  "departments",
  "careers",
  "ranking",
  "fees",
  "scholarships",
  "placement",
  "faqs",
];

function CollegePage({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = React.use(params);

  const id = slugAndId.split("-").pop();

  if (!id || isNaN(Number(id))) {
    notFound();
  }
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const { college, error, loading } = useUniversity(Number(id));

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  React.useEffect(() => {
    checkScrollPosition();
    const handleResize = () => checkScrollPosition();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setTimeout(checkScrollPosition, 300);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (loading) return <CollegeSkeleton />;
  if (!college) return notFound;

  return (
    <>
      <UniLayout params={params} />

      <div className="min-h-screen container mx-auto px-4 py-6 flex flex-col lg:flex-row-reverse gap-6">
        <QuickFacts college={college} />
        <div className="flex-1 min-w-0">
          <Tabs defaultValue="info" className="w-full">
            <div className="relative mb-6">
              {/* Left Arrow */}
              {canScrollLeft && (
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-sm hover:bg-background transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}

              {/* Right Arrow */}
              {canScrollRight && (
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-sm hover:bg-background transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}

              {/* Scrollable Tabs Container */}
              <div
                ref={scrollRef}
                className="overflow-x-auto scrollbar-hide mx-8"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onScroll={checkScrollPosition}
              >
                <TabsList className="inline-flex w-auto gap-4 p-0 h-auto min-w-full justify-start">
                  {indexes.map((index) => (
                    <TabsTrigger
                      key={index}
                      value={index}
                      className="whitespace-nowrap px-4 py-2 text-sm flex-shrink-0"
                    >
                      {index.toUpperCase()}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            {indexes.map((index) => (
              <TabsContent key={index} value={index}>
                <div className="p-2 sm:p-4 lg:p-6">
                  <Universitytabs tab={index} id={id} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default CollegePage;
