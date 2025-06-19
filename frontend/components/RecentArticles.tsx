import { useLatestArticles } from "@/hooks/useLatestArticles";
import { Article } from "@/types/search";
import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

function stripHtmlAndTruncate(html: string): string {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text;
}

function RecentArticles() {
  const { articles, loading, loadingMore, error, hasMore, loadMore } =
    useLatestArticles();
  const isLoadingRef = useRef(false);

  // Scroll event handler
  const handleScroll = useCallback(() => {
    // Prevent multiple simultaneous requests
    if (isLoadingRef.current || loading || loadingMore || !hasMore) {
      return;
    }

    // Calculate scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Trigger load more when user is 200px from bottom
    const threshold = 200;
    const isNearBottom = scrollTop + windowHeight >= documentHeight - threshold;

    if (isNearBottom) {
      isLoadingRef.current = true;
      loadMore();
    }
  }, [loading, loadingMore, hasMore, loadMore]);

  // Set up scroll event listener
  useEffect(() => {
    // Add scroll event listener with throttling
    let timeoutId: NodeJS.Timeout;

    const throttledHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 100); // Throttle to 100ms
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]);

  // Reset loading ref when loadMore completes
  useEffect(() => {
    if (!loadingMore) {
      isLoadingRef.current = false;
    }
  }, [loadingMore]);

  const ArticleCardSkeleton = () => (
    <div className="animate-pulse">
      <div className="flex flex-col">
        <Skeleton className="w-full h-52 rounded-lg flex-shrink-0" />
        <div className="mt-4 flex-1 flex flex-col justify-center space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    </div>
  );

  if (loading && articles.length === 0) {
    return (
      <section className="pt-8">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ArticleCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-8">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center text-red-600">
            <p>Error loading articles: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-8">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: Article) => {
            // Format date as "MAY 4, 2023"
            const articleDate = new Date(article.createdAt);
            const formattedDate = articleDate
              .toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
              .toUpperCase();

            return (
              <Link
                href={`/student-resources/${article.slug}-${article.id}`}
                key={article.id}
                className="group"
              >
                <div className="overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300 bg-[#F6F6F7] max-w-[400px] max-h-[450px] mx-auto">
                  <div className="flex flex-col">
                    <div className="relative w-full h-52 flex-shrink-0 overflow-hidden">
                      <img
                        src={article.image || "/transfer3.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="text-base text-gray-500 font-normal mb-2">
                        {formattedDate}
                      </div>
                      <h3 className="text-3xl font-medium text-blue-800 transition-colors leading-tight line-clamp-2 group-hover:text-blue-700">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-lg font-light text-gray-500 line-clamp-2">
                        {stripHtmlAndTruncate(article.content)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Loading indicator for infinite scroll */}
        {loadingMore && (
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
              <ArticleCardSkeleton />
            </div>
          </div>
        )}

        {/* End of results indicator */}
        {!hasMore && articles.length > 0 && (
          <div className="text-center mt-8 text-gray-500">
            <p>You've reached the end of the articles.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentArticles;
