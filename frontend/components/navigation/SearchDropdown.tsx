"use client";

import {
  GraduationCap,
  BookOpen,
  FileText,
  MapPin,
  Star,
  Clock,
} from "lucide-react";
import { College, Course, Article } from "@/types/search";

interface SearchDropdownProps {
  results: {
    colleges: College[];
    courses: Course[];
    articles: Article[];
  };
  loading: boolean;
  searchQuery: string;
  getTotalResults: () => number;
  onResultClick: (
    type: "college" | "course" | "article",
    item: College | Course | Article
  ) => void;
  onViewAll: () => void;
}

export default function SearchDropdown({
  results,
  loading,
  searchQuery,
  getTotalResults,
  onResultClick,
}: SearchDropdownProps) {
  console.log({ results });

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
      {loading ? (
        <div className="p-4 text-center text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span>Searching...</span>
          </div>
        </div>
      ) : getTotalResults() > 0 ? (
        <div className="py-2">
          {/* Colleges Section */}
          {results.colleges.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <GraduationCap size={16} className="text-blue-600" />
                  <h3 className="text-sm font-medium text-gray-700">
                    Colleges
                  </h3>
                </div>
              </div>
              {results.colleges.map((college) => (
                <button
                  key={`college-${college.id}`}
                  onClick={() => onResultClick("college", college)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {college.college_name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin size={12} className="text-gray-400" />
                        <p className="text-xs text-gray-500">
                          {college.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right ml-2">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-500" />
                        <span className="text-xs font-medium text-gray-700">
                          {college.rating}
                        </span>
                      </div>
                      <p className="text-xs text-blue-600 font-medium">
                        Score: {college.score}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Courses Section */}
          {results.courses.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <BookOpen size={16} className="text-green-600" />
                  <h3 className="text-sm font-medium text-gray-700">Courses</h3>
                </div>
              </div>
              {results.courses.map((course) => (
                <button
                  key={`course-${course.id}`}
                  onClick={() => onResultClick("course", course)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {course.course_name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={12} className="text-gray-400" />
                        <p className="text-xs text-gray-500">
                          {Math.round(course.duration_in_months / 12)} years
                        </p>
                      </div>
                    </div>
                    <div className="text-right ml-2">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-500" />
                        <span className="text-xs font-medium text-gray-700">
                          {course.rating}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 font-medium">
                        Score: {course.score}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Articles Section */}
          {results.articles.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <FileText size={16} className="text-purple-600" />
                  <h3 className="text-sm font-medium text-gray-700">
                    Articles
                  </h3>
                </div>
              </div>
              {results.articles.map((article) => (
                <button
                  key={`article-${article.id}`}
                  onClick={() => onResultClick("article", article)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">
                      {article.title}
                    </h4>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        {article.meta_desc}
                      </p>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        {article.silos}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : searchQuery.trim().length > 2 ? (
        <div className="p-4 text-center text-gray-500">
          <p className="text-sm">No results found for: {searchQuery}</p>
          <p className="text-xs mt-1">Try a different search term</p>
        </div>
      ) : null}
    </div>
  );
}
