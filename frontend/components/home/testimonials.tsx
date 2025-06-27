"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
  {
    _id: "1",
    name: "Aarti Patel",
    role: "Bachelor of Nursing at a regional university in Queensland",
    testimonial:
      "I had already spent a semester in Sydney but felt overwhelmed by the high tuition and living costs. A friend recommended PickMyUni, and honestly, it changed everything. Their team helped me transfer to a more affordable university in regional Queensland that also gives me extra points for PR. The process was smooth, and they even guided me with my visa paperwork. Thanks to PickMyUni, I’m now on the right track—both academically and financially.",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
  },
  {
    _id: "2",
    name: "Muhammad Faizan",
    role: "Master of Information Technology in Victoria",
    testimonial:
      "Choosing a university in Australia can be confusing, especially with so many expensive options. PickMyUni helped me compare multiple affordable IT courses and find one that fits both my budget and PR plan. They were transparent, professional, and super responsive. Without their support, I would have spent so much more money on tuition. I’m now settled in Melbourne, loving my course, and confident about my PR future.",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
  },
  {
    _id: "3",
    name: "Mereani Lewaqa",
    role: "Certificate IV in Aged Care, transferring to Diploma of Community Services",
    testimonial:
      "PickMyUni supported me from the first day. I wanted to build a future in aged care and apply for PR later, but I didn’t know which course or college to choose. They helped me find a budget-friendly provider and even assisted with my course upgrade to Diploma level. I’m now working part-time in the sector I love, gaining experience and building towards permanent residency. I’m so thankful for their honest advice and encouragement.",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function TestimonialsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

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

  return (
    <section className="py-28 bg-brand-primary flex flex-col">
      <div className="container mx-auto flex justify-between items-center mb-12">
        <h2 className=" text-4xl sm:text-[42px] leading-tight font-semibold text-white">
          What Students <span className="text-brand-secondary">Say!</span>
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          onScroll={checkScrollPosition}
          className="flex flex-row gap-x-4 overflow-x-auto scrollbar-hide scroll-smooth container mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div key={testimonial._id} className="flex flex-col flex-shrink-0">
              {/* Testimonial speech bubble */}
              <div className="relative max-w-[320px]  min-h-[200px] bg-white rounded-2xl p-6 mb-6 shadow-lg ">
                {testimonial.hasVideo ? (
                  <div className="size-full">
                    <iframe
                      style={{ maxWidth: "200px" }}
                      src={testimonial.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="">
                    <Quote className="text-gray-400 text-5xl font-serif leading-none h-8 opacity-50 mb-1" />
                    <p className="text-black leading-relaxed">
                      {testimonial.testimonial}
                    </p>
                  </div>
                )}
                {/* Speech bubble tail */}
                <div className="absolute -bottom-1 right-2">
                  {/* triangle */}
                  <div className="w-4 h-4 bg-white rotate-45" />
                </div>
              </div>

              {/* Profile section */}
              <div className="flex items-center space-x-4 max-w-[320px]">
                <div>
                  <h4 className="font-semibold text-white text-base mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
