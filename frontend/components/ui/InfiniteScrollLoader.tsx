import React from "react";
import { UniversityCardSkeleton } from "../skeleton/university-skeleton";

interface InfiniteScrollLoaderProps {
  isLoading: boolean;
  hasNextPage: boolean;
  totalItems: number;
}

export const InfiniteScrollLoader: React.FC<InfiniteScrollLoaderProps> =
  React.memo(({ isLoading, hasNextPage, totalItems }) => {
    if (!hasNextPage && totalItems > 0) {
      return (
        <div className="flex justify-center py-8">
          <div className="text-gray-500 text-center">
            <p className="text-lg font-medium">You've reached the end!</p>
            <p className="text-sm">Showing all {totalItems} universities</p>
          </div>
        </div>
      );
    }

    if (isLoading || hasNextPage) {
      return (
        <div className="space-y-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <UniversityCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    return null;
  });

InfiniteScrollLoader.displayName = "InfiniteScrollLoader";
