"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Hard-coded testimonials data based on the image
const testimonialsData = [
  {
    _id: "1",
    name: "Aarti Patel",
    role: "Bachelor of Nursing at a regional university in Queensland",
    testimonial:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
  },
  {
    _id: "2",
    name: "Steven John",
    role: "Marketing Professional",
    testimonial:
      "A seamless and user-friendly platform. I found the perfect course and improved my skills in no time! Highly recommended.",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
  },
  {
    _id: "3",
    name: "Sarah Wilson",
    role: "Marketing Professional",
    testimonial:
      "Exceptional service and support throughout my application process. The platform made everything so much easier.",
    hasVideo: true,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    _id: "4",
    name: "Vinay Rattan",
    role: "Marketing Professional",
    testimonial:
      "Outstanding experience with comprehensive university information. Helped me make the right choice for my future.",
    hasVideo: true,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    _id: "5",
    name: "Michael Chen",
    role: "Software Engineer",
    testimonial:
      "The platform's detailed university comparisons were incredibly helpful in making my decision. Highly recommend!",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
  },
  {
    _id: "6",
    name: "Michael Chen",
    role: "Software Engineer",
    testimonial:
      "The platform's detailed university comparisons were incredibly helpful in making my decision. Highly recommend!",
    hasVideo: false,
    profileImage: "/api/placeholder/60/60",
    videoUrl: "",
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
        <h2 className="text-2xl md:text-4xl font-bold text-white">
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
              <div className="relative max-w-[320px]  min-h-[200px] bg-white rounded-2xl p-6 mb-6 shadow-lg">
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
                    <p className="text-black text-sm leading-relaxed">
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
              <div className="flex items-center space-x-4">
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
