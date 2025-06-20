import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialCardSkeleton() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <Skeleton className="w-12 h-12 rounded-full mr-4" />
        <div className="flex-1">
          <Skeleton className="h-4 w-24 mb-2" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-4 h-4 rounded-none" />
            ))}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export function TestimonialsLoadingSkeleton() {
  return (
    <section className="py-16 bg-brand-primary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            What Students <span className="text-brand-secondary">Say!</span>
          </h2>
          <div className="flex space-x-2">
            <button
              disabled
              className="p-1 text-white opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              disabled
              className="p-1 text-white opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <TestimonialCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
