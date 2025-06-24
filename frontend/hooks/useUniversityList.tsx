"use client";
import { useState, useEffect, useCallback } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface University {
  id: number;
  college_name: string;
  location: string;
  rating?: number;
  score?: number;
  slug: string;
  avg_fees_in_aud: number;
  [key: string]: any; // For any additional properties
}

export function useUniversityList(initialParams: any = {}) {
  const [universities, setUniversities] = useState<University[]>([]);
  const [filters, setFilters] = useState({
    stream: [],
    city: [],
    state: [],
    courses: [],
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    ...initialParams,
  });

  const fetchUniversities = useCallback(async (queryParams: any) => {
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
      if (queryParams.sortBy) searchParams.append("sortBy", queryParams.sortBy);

      const response = await fetch(
        `${API_BASE_URL}/api/v1/college/list?${searchParams.toString()}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: any = await response.json();

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
  }, []);

  // Fetch data when params change
  useEffect(() => {
    fetchUniversities(params);
  }, [params, fetchUniversities]);

  // Update search query
  const updateSearch = useCallback((searchquery: string) => {
    setParams((prev: any) => ({
      ...prev,
      searchquery,
      page: 1, // Reset to first page when searching
    }));
  }, []);

  // Update page
  const updatePage = useCallback((page: number) => {
    setParams((prev: any) => ({
      ...prev,
      page,
    }));
  }, []);

  // Update filters
  const updateFilters = useCallback((newFilters: any) => {
    setParams((prev: any) => ({
      ...prev,
      ...newFilters,
      page: 1, // Reset to first page when filtering
    }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setParams({
      page: 1,
      limit: 10,
    });
  }, []);

  // Update sorting
  const updateSorting = useCallback((sortBy: string) => {
    setParams((prev: any) => ({
      ...prev,
      sortBy,
    }));
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
    updateSorting,
    clearFilters,
    refresh,
  };
}
