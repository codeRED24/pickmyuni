"use client";
import { useState, useEffect, useCallback } from "react";
import {
  UniversityListResponse,
  UniversityListParams,
  University,
  UniversityListFilters,
  PaginationInfo,
} from "@/types/university";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export function useUniversityList(initialParams: UniversityListParams = {}) {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filters, setFilters] = useState<UniversityListFilters>({
    stream: [],
    city: [],
    state: [],
    courses: [],
  });
  const [pagination, setPagination] = useState<PaginationInfo>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<UniversityListParams>({
    page: 1,
    limit: 10,
    ...initialParams,
  });

  const fetchUniversities = useCallback(
    async (queryParams: UniversityListParams) => {
      setLoading(true);
      setError(null);

      try {
        // Build query string
        const searchParams = new URLSearchParams();

        if (queryParams.searchquery)
          searchParams.append("searchquery", queryParams.searchquery);
        if (queryParams.page)
          searchParams.append("page", queryParams.page.toString());
        if (queryParams.limit)
          searchParams.append("limit", queryParams.limit.toString());
        if (queryParams.cityid)
          searchParams.append("cityid", queryParams.cityid.toString());
        if (queryParams.stateid)
          searchParams.append("stateid", queryParams.stateid.toString());
        if (queryParams.courseid)
          searchParams.append("courseid", queryParams.courseid.toString());
        if (queryParams.streamid)
          searchParams.append("streamid", queryParams.streamid.toString());
        if (queryParams.min_fees)
          searchParams.append("min_fees", queryParams.min_fees.toString());
        if (queryParams.max_fees)
          searchParams.append("max_fees", queryParams.max_fees.toString());

        const response = await fetch(
          `${API_BASE_URL}/api/v1/college/list?${searchParams.toString()}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: UniversityListResponse = await response.json();

        if (data.success) {
          setUniversities(data.data.colleges);
          setFilters(data.data.filters);
          setPagination(data.data.pagination);
        } else {
          throw new Error("Failed to fetch universities");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "An error occurred while fetching universities";
        setError(errorMessage);
        console.error("Error fetching universities:", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Fetch data when params change
  useEffect(() => {
    fetchUniversities(params);
  }, [params, fetchUniversities]);

  // Update search query
  const updateSearch = useCallback((searchquery: string) => {
    setParams((prev) => ({
      ...prev,
      searchquery,
      page: 1, // Reset to first page when searching
    }));
  }, []);

  // Update page
  const updatePage = useCallback((page: number) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  }, []);

  // Update filters
  const updateFilters = useCallback(
    (newFilters: Partial<UniversityListParams>) => {
      setParams((prev) => ({
        ...prev,
        ...newFilters,
        page: 1, // Reset to first page when filtering
      }));
    },
    []
  );

  // Clear all filters
  const clearFilters = useCallback(() => {
    setParams({
      page: 1,
      limit: 10,
    });
  }, []);

  // Refresh data
  const refresh = useCallback(() => {
    fetchUniversities(params);
  }, [params, fetchUniversities]);

  return {
    universities,
    filters,
    pagination,
    loading,
    error,
    params,
    updateSearch,
    updatePage,
    updateFilters,
    clearFilters,
    refresh,
  };
}
