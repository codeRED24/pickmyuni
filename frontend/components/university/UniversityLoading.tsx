"use client";
import React from "react";
interface UniversityLoadingProps {
  message?: string;
}

export function UniversityLoading({
  message = "Loading universities...",
}: UniversityLoadingProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
}
