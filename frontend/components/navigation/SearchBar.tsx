"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useComprehensiveSearch } from "@/hooks/useComprehensiveSearch";
import { College, Course, Article } from "@/types/search";
import SearchDropdown from "./SearchDropdown";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  const { results, loading, search, getTotalResults } =
    useComprehensiveSearch();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounced search
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    if (searchQuery.trim().length > 2) {
      const timer = setTimeout(() => {
        search(searchQuery.trim());
        setShowDropdown(true);
      }, 300);
      setDebounceTimer(timer);
    } else {
      setShowDropdown(false);
    }

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [searchQuery, search]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (
    type: "college" | "course" | "article",
    item: College | Course | Article
  ) => {
    if (type === "college") {
      const college = item as College;
      setShowDropdown(false);
      router.push(`/university/${college.slug}-${college.id}`);
    } else if (type === "course") {
      const course = item as Course;
      setShowDropdown(false);
      router.push(`/search?q=${encodeURIComponent(course.course_name)}`);
    } else if (type === "article") {
      const article = item as Article;
      setShowDropdown(false);
      router.push(`/student-resources/${article.id}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-blue-900 py-4">
      <div className="container mx-auto px-4">
        <div className="relative" ref={searchRef}>
          <div className="relative flex items-center">
            <button className="absolute left-4 text-gray-400 z-10">
              <Search size={20} />
            </button>
            <Input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              // onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              onFocus={() =>
                searchQuery.trim().length > 2 && setShowDropdown(true)
              }
              placeholder="Search for Universities, Courses and More"
              className="pl-10 pr-4 py-2 w-full rounded-md bg-blue-700 border-blue-600 text-white placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* <Button
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleSearch}
            >
              Search
            </Button> */}
          </div>

          {/* Search Dropdown */}
          {showDropdown && (
            <SearchDropdown
              results={results}
              loading={loading}
              searchQuery={searchQuery}
              getTotalResults={getTotalResults}
              onResultClick={handleResultClick}
              onViewAll={handleSearch}
            />
          )}
        </div>
      </div>
    </div>
  );
}
