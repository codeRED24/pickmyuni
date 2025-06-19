import React from "react";
import { Skeleton } from "../ui/skeleton";

function CollegeSkeleton() {
  return (
    <div>
      {" "}
      <>
        <div className="bg-blue-50">
          {/* Hero Section Skeleton */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
            <Skeleton className="w-full h-full bg-gray-200" />

            {/* University Logo Skeleton */}
            <div className="absolute inset-x-0 -bottom-10 sm:-bottom-12 flex xl:container justify-center xl:justify-start z-10">
              <Skeleton className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32  lg:w-36 lg:h-36 rounded-full bg-gray-300 border-2 border-white shadow-lg" />
            </div>
          </div>

          {/* University Name and Address Skeleton */}
          <div className="max-w-6xl mx-auto py-12 px-16">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
              {/* University Info Skeleton */}
              <div className="text-center sm:text-left flex-1">
                <Skeleton className="h-8 sm:h-10 md:h-12 lg:h-14 w-3/4 mx-auto sm:mx-0 mb-2 bg-gray-300" />
                <Skeleton className="h-4 sm:h-5 md:h-6 w-1/2 mx-auto sm:mx-0 bg-gray-200" />
              </div>

              {/* Enquire Button Skeleton */}
              <div className="flex justify-center sm:justify-end">
                <Skeleton className="h-10 sm:h-12 w-32 sm:w-40 rounded-lg bg-gray-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen container mx-auto px-4 py-6 flex flex-col lg:flex-row-reverse gap-6">
          {/* Quick Facts Skeleton */}
          <div className="bg-[#FAF4F0] p-4 sm:p-6 h-fit w-full lg:w-[320px] lg:min-w-[320px] flex flex-col shadow-sm">
            <Skeleton className="h-6 sm:h-8 w-32 mb-4 sm:mb-6" />
          </div>

          {/* Main Content Skeleton */}
          <div className="flex-1 min-w-0">
            {/* Tabs Skeleton */}
            <div className="relative mb-6">
              <div className="overflow-x-auto scrollbar-hide mx-8">
                <div className="inline-flex w-auto gap-4 p-0 h-auto min-w-full justify-start">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="h-8 w-20 rounded-md flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area Skeleton */}
            <div className="p-2 sm:p-4 lg:p-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-5/6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Skeleton className="h-32 w-full rounded-lg" />
                  <Skeleton className="h-32 w-full rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CollegeSkeleton;
