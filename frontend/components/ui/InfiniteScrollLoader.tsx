import React from "react";

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
        <div className="flex justify-center py-8">
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span>Loading more universities...</span>
          </div>
        </div>
      );
    }

    return null;
  });

InfiniteScrollLoader.displayName = "InfiniteScrollLoader";
