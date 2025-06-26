"use client";
import React, { useState } from "react";
import { useInfiniteUniversityList } from "@/hooks/useInfiniteUniversityList";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import {
  UniversityCard,
  UniversityHero,
  UniversityListHeader,
  UniversityLoading,
} from "@/components/university";
import { UniversityCardSkeleton } from "@/components/skeleton/university-skeleton";
import { EnhancedFilterSection } from "@/components/university/EnhancedFilterSection";
import { InfiniteScrollLoader } from "@/components/ui/InfiniteScrollLoader";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { BreadcrumbSchema } from "@/components/seo";
import { commonBreadcrumbs } from "@/lib/breadcrumbs";

function UniversityPage() {
  const {
    universities,
    filters: availableFilters,
    pagination,
    loading,
    loadingMore,
    error,
    params,
    updateSearch,
    updateFilters,
    updateSorting,
    clearFilters,
    loadNextPage,
  } = useInfiniteUniversityList();

  // Setup infinite scroll
  const { loadingRef } = useInfiniteScroll({
    hasNextPage: pagination.hasNextPage,
    isFetchingNextPage: loadingMore,
    fetchNextPage: loadNextPage,
  });

  const [localFilters, setLocalFilters] = useState({
    course: "All Courses",
    location: "All Locations",
    feesRange: "All Fees",
    exams: "All Exams",
    search: "",
    stream: "All Streams",
    state: "All States",
  });

  // Get current applied filters from the hook
  const currentFilters = {
    searchquery:
      universities.length > 0 || loading ? params?.searchquery : undefined,
    stateid: universities.length > 0 || loading ? params?.stateid : undefined,
    courseid: universities.length > 0 || loading ? params?.courseid : undefined,
    streamid: universities.length > 0 || loading ? params?.streamid : undefined,
    min_fees: universities.length > 0 || loading ? params?.min_fees : undefined,
    max_fees: universities.length > 0 || loading ? params?.max_fees : undefined,
  };
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Top Rated First");

  // Handle sort changes and map to API parameters
  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy);

    // Map frontend sort options to backend parameters
    let apiSortBy = "score_desc"; // default
    switch (newSortBy) {
      case "Top Rated First":
        apiSortBy = "rating_desc";
        break;
      case "Top Scored First":
        apiSortBy = "score_desc";
        break;
      case "Lowest Rated First":
        apiSortBy = "rating_asc";
        break;
      case "Lowest Scored First":
        apiSortBy = "score_asc";
        break;
    }

    updateSorting(apiSortBy);
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

  // Clear individual filter
  const clearIndividualFilter = (filterType: string) => {
    switch (filterType) {
      case "search":
        updateSearch("");
        break;
      case "state":
        updateFilters({ stateid: undefined });
        break;
      case "course":
        updateFilters({ courseid: undefined });
        break;
      case "stream":
        updateFilters({ streamid: undefined });
        break;
      case "fees":
        updateFilters({ min_fees: undefined, max_fees: undefined });
        break;
    }
  };

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

  if (loading && !universities.length) {
    return <UniversityLoading />;
  }

  if (error) {
    console.error(error);
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={commonBreadcrumbs.university()} />

      {/* Hero Section */}
      <UniversityHero />

      {/* Main Content */}
      <div className="container mx-auto py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Section */}
          <EnhancedFilterSection
            filters={localFilters}
            setFilters={setLocalFilters}
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            availableFilters={availableFilters}
            currentFilters={currentFilters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
            onClearIndividualFilter={clearIndividualFilter}
          />

          {/* University List */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <UniversityListHeader
              totalCount={pagination.totalItems}
              sortBy={sortBy}
              setSortBy={handleSortChange}
            />

            {/* University Cards */}
            {loading && universities.length === 0 ? (
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <UniversityCardSkeleton key={index} />
                ))}
              </div>
            ) : universities.length > 0 ? (
              <div className="space-y-4">
                {universities.map((university: any, index: number) => (
                  <UniversityCard
                    key={university.id || index}
                    university={university}
                  />
                ))}

                {/* Infinite scroll trigger and loader */}
                <div ref={loadingRef}>
                  <InfiniteScrollLoader
                    isLoading={loadingMore}
                    hasNextPage={pagination.hasNextPage}
                    totalItems={pagination.totalItems}
                  />
                </div>
              </div>
            ) : null}

            {/* No Results */}
            {universities.length === 0 && !loading && (
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

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

export default UniversityPage;
