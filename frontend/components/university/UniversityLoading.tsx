"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";

interface UniversityLoadingProps {
  message?: string;
}

export function UniversityLoading({
  message = "Loading universities...",
}: UniversityLoadingProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <Skeleton className="relative h-64 md:h-80 lg:h-96 bg-gray-200 animate-pulse"></Skeleton>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
