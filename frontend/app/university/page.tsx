"use client";
import React, { useState } from "react";
import { useUniversityList } from "@/hooks/useUniversityList";
import {
  UniversityCard,
  UniversityHero,
  UniversityListHeader,
  UniversityLoading,
} from "@/components/university";
import { UniversityCardSkeleton } from "@/components/skeleton/university-skeleton";
import { EnhancedFilterSection } from "@/components/university/EnhancedFilterSection";

function UniversityPage() {
  const {
    universities,
    filters: availableFilters,
    pagination,
    loading,
    error,
    updateSearch,
    updatePage,
    updateFilters,
    clearFilters,
  } = useUniversityList();

  const [localFilters, setLocalFilters] = useState({
    course: "All Courses",
    location: "All Locations",
    feesRange: "All Fees",
    exams: "All Exams",
    search: "",
    stream: "All Streams",
    state: "All States",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Top Rated First");

  // Handle search
  const handleSearch = (searchTerm: string) => {
    setLocalFilters((prev) => ({ ...prev, search: searchTerm }));
    updateSearch(searchTerm);
  };

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string | number) => {
    switch (filterType) {
      case "state":
        updateFilters({
          stateid: typeof value === "number" ? value : undefined,
        });
        break;
      case "course":
        updateFilters({
          courseid: typeof value === "number" ? value : undefined,
        });
        break;
      case "stream":
        updateFilters({
          streamid: typeof value === "number" ? value : undefined,
        });
        break;
      case "min_fees":
        updateFilters({
          min_fees: typeof value === "number" ? value : undefined,
        });
        break;
      case "max_fees":
        updateFilters({
          max_fees: typeof value === "number" ? value : undefined,
        });
        break;
    }
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    updatePage(page);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setLocalFilters({
      course: "All Courses",
      location: "All Locations",
      feesRange: "All Fees",
      exams: "All Exams",
      search: "",
      stream: "All Streams",
      state: "All States",
    });
    clearFilters();
  };

  // Sort universities locally (since API doesn't handle sorting)
  const sortedUniversities = React.useMemo(() => {
    const sorted = [...universities];
    switch (sortBy) {
      case "Top Rated First":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "Name A-Z":
        sorted.sort((a, b) => a.college_name.localeCompare(b.college_name));
        break;
      case "Name Z-A":
        sorted.sort((a, b) => b.college_name.localeCompare(a.college_name));
        break;
      case "Fees Low to High":
        sorted.sort((a, b) => a.avg_fees_in_aud - b.avg_fees_in_aud);
        break;
      case "Fees High to Low":
        sorted.sort((a, b) => b.avg_fees_in_aud - a.avg_fees_in_aud);
        break;
      default:
        break;
    }
    return sorted;
  }, [universities, sortBy]);

  if (loading && !universities.length) {
    return <UniversityLoading />;
  }

  if (error) {
    console.error(error);
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <UniversityHero />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Section */}
          <EnhancedFilterSection
            filters={localFilters}
            setFilters={setLocalFilters}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            availableFilters={availableFilters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />

          {/* University List */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <UniversityListHeader
              totalCount={pagination.totalItems}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onClearFilters={clearAllFilters}
              hasResults={sortedUniversities.length > 0}
            />

            {/* University Cards */}
            {loading && universities.length === 0 ? (
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <UniversityCardSkeleton key={index} />
                ))}
              </div>
            ) : sortedUniversities.length > 0 ? (
              <div className="space-y-4">
                {sortedUniversities.map((university: any, index: number) => (
                  <UniversityCard
                    key={university.id || index}
                    university={university}
                  />
                ))}
                {loading && (
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <UniversityCardSkeleton key={`loading-${index}`} />
                    ))}
                  </div>
                )}
              </div>
            ) : null}

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-8 flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  disabled={pagination.currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex space-x-1">
                  {Array.from(
                    { length: pagination.totalPages },
                    (_, i) => i + 1
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg ${
                        page === pagination.currentPage
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  disabled={pagination.currentPage === pagination.totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}

            {/* No Results */}
            {sortedUniversities.length === 0 && !loading && (
              <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
                <div className="text-gray-500 text-lg mb-4">
                  No universities found matching your criteria.
                </div>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversityPage;
