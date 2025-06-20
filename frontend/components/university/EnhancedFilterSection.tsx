"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, X, ChevronDown, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EnhancedFilterSectionProps {
  filters: any;
  setFilters: (filters: any) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  availableFilters?: any;
  onFilterChange?: (filterType: string, value: string | number) => void;
  onSearch?: (searchTerm: string) => void;
}

export function EnhancedFilterSection({
  filters,
  setFilters,
  isOpen,
  setIsOpen,
  availableFilters,
  onFilterChange,
  onSearch,
}: EnhancedFilterSectionProps) {
  const [searchTerm, setSearchTerm] = useState(filters.search || "");
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedStreamId, setSelectedStreamId] = useState<number | null>(null);
  const [minFees, setMinFees] = useState<string>("");
  const [maxFees, setMaxFees] = useState<string>("");

  const clearAllFilters = () => {
    setFilters({
      course: "All Courses",
      location: "All Locations",
      feesRange: "All Fees",
      exams: "All Exams",
      search: "",
    });
    setSearchTerm("");
    setSelectedStateId(null);
    setSelectedCourseId(null);
    setSelectedStreamId(null);
    setMinFees("");
    setMaxFees("");

    // Clear API filters
    if (onFilterChange) {
      onFilterChange("state", "");
      onFilterChange("course", "");
      onFilterChange("stream", "");
      onFilterChange("min_fees", "");
      onFilterChange("max_fees", "");
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
    setFilters({ ...filters, search: searchTerm });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleStateChange = (stateId: string) => {
    const id = stateId === "all" ? null : parseInt(stateId);
    setSelectedStateId(id);
    if (onFilterChange) {
      onFilterChange("state", id || "");
    }
  };

  const handleCourseChange = (courseId: string) => {
    const id = courseId === "all" ? null : parseInt(courseId);
    setSelectedCourseId(id);
    if (onFilterChange) {
      onFilterChange("course", id || "");
    }
  };

  const handleFeesChange = () => {
    if (onFilterChange) {
      if (minFees) onFilterChange("min_fees", parseInt(minFees));
      if (maxFees) onFilterChange("max_fees", parseInt(maxFees));
    }
  };

  const handleStreamChange = (streamId: string) => {
    const id = streamId === "all" ? null : parseInt(streamId);
    setSelectedStreamId(id);
    if (onFilterChange) {
      onFilterChange("stream", id || "");
    }
  };

  const hasActiveFilters =
    filters.course !== "All Courses" ||
    filters.location !== "All Locations" ||
    filters.feesRange !== "All Fees" ||
    filters.exams !== "All Exams" ||
    selectedStateId !== null ||
    selectedCourseId !== null ||
    selectedStreamId !== null ||
    minFees !== "" ||
    maxFees !== "";

  return (
    <div className="lg:w-80 flex-shrink-0">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          <div className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 text-xs">
                Active
              </Badge>
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* Filter Panel */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:block bg-orange-50 p-4 rounded-lg space-y-6`}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs text-red-600 hover:text-red-700"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="py-4 border-y border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Active Filters:
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedStateId && availableFilters?.state && (
                <Badge
                  variant="secondary"
                  onClick={() => handleStateChange("all")}
                  className="text-xs cursor-pointer"
                >
                  {
                    availableFilters.state.find(
                      (s: any) => s.id === selectedStateId
                    )?.name
                  }
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {selectedStreamId && availableFilters?.stream && (
                <Badge
                  variant="secondary"
                  onClick={() => handleStreamChange("all")}
                  className="text-xs cursor-pointer"
                >
                  {
                    availableFilters.stream.find(
                      (s: any) => s.id === selectedStreamId
                    )?.name
                  }
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {selectedCourseId && availableFilters?.courses && (
                <Badge
                  variant="secondary"
                  onClick={() => handleCourseChange("all")}
                  className="text-xs cursor-pointer"
                >
                  {
                    availableFilters.courses.find(
                      (c: any) => c.id === selectedCourseId
                    )?.name
                  }
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
              {(minFees || maxFees) && (
                <Badge
                  variant="secondary"
                  onClick={() => {
                    setMinFees("");
                    setMaxFees("");
                    handleFeesChange();
                  }}
                  className="text-xs cursor-pointer"
                >
                  Fees: {minFees || "0"} - {maxFees || "∞"}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Search Universities
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleSearch} size="sm" className="px-3">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* State Filter */}
        {availableFilters?.state && availableFilters.state.length > 0 && (
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-gray-700">
              State/Province
            </label>
            <Select
              value={selectedStateId?.toString() || "all"}
              onValueChange={handleStateChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {availableFilters.state.map((state: any) => (
                  <SelectItem key={state.id} value={state.id.toString()}>
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Stream Filter */}
        {availableFilters?.stream && availableFilters.stream.length > 0 && (
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-gray-700">Stream</label>
            <Select
              value={selectedStreamId?.toString() || "all"}
              onValueChange={handleStreamChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Stream" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Streams</SelectItem>
                {availableFilters.stream.map((stream: any) => (
                  <SelectItem key={stream.id} value={stream.id.toString()}>
                    {stream.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Course Filter */}
        {availableFilters?.courses && availableFilters.courses.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Course</label>
            <Select
              value={selectedCourseId?.toString() || "all"}
              onValueChange={handleCourseChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                {availableFilters.courses.map((course: any) => (
                  <SelectItem key={course.id} value={course.id.toString()}>
                    {course.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Fees Range Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Fees Range (AUD)
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="Min"
              type="number"
              value={minFees}
              onChange={(e) => setMinFees(e.target.value)}
              onBlur={handleFeesChange}
            />
            <Input
              placeholder="Max"
              type="number"
              value={maxFees}
              onChange={(e) => setMaxFees(e.target.value)}
              onBlur={handleFeesChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
