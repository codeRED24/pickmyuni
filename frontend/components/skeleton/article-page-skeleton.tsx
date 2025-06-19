import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ArticlePageSkeleton() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section Skeleton */}
      <section className="relative w-full h-[336px]">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Content Skeleton */}
        <div className="space-y-4 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="my-6">
            <Skeleton className="h-48 w-full" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>

        {/* Social Share Section Skeleton */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-100/10 py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Skeleton className="h-8 w-80" />
          <div className="flex gap-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
