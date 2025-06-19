"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTestimonials } from "../../hooks/useTestimonials";
import { TestimonialsLoadingSkeleton } from "@/components/skeleton/testimonial-skeleton";

export default function TestimonialsSection() {
  const { testimonials: testimonialsData, loading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) {
    return <TestimonialsLoadingSkeleton />;
  }

  if (error) {
    return (
      <section className="py-16 bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-white">Failed to load testimonials</div>
        </div>
      </section>
    );
  }

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + 3
  );

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(testimonialsData.length - 3, currentIndex + 1));
  };

  return (
    <section className="py-16 bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            What Students <span className="text-orange-500">Say!</span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-1 text-white disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= testimonialsData.length - 3}
              className="p-1 text-white disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial._id} className="overflow-hidden">
              {/* Testimonial speech bubble */}
              <div className="relative bg-white rounded-lg p-6 mb-6 shadow-lg">
                <div className="text-gray-400 text-5xl font-serif leading-none h-8 opacity-50 mb-1">
                  &quot;
                </div>
                <p className="text-black text-sm leading-relaxed">
                  {testimonial.testimonial}
                </p>

                {/* Speech bubble pointer */}
                <div
                  className="absolute -bottom-2 left-8 w-4 h-4 bg-white"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></div>
              </div>

              {/* Author info */}
              <div className="flex items-center">
                {/* {testimonial.profilePic && (
                  <div className="relative">
                    <img
                      src={testimonial.profilePic}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                )} */}
                <div className="ml-3">
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center">
                    {[...Array(Math.round(testimonial.rating || 0))].map(
                      (_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
