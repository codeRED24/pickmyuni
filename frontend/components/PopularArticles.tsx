import { Article } from "@/types/search";
import React from "react";
import Link from "next/link";
import { useTopArticles } from "@/hooks/useTopArticles";

function PopularArticles() {
  const { articles, loading, error } = useTopArticles();

  if (loading) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="flex">
                    <div className="w-40 h-32 bg-gray-200 flex-shrink-0"></div>
                    <div className="p-4 flex-1 flex flex-col justify-center space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  console.log(articles);

  return (
    <section className="pt-8">
      <div className="max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles?.slice(0, 4).map((article: Article) => (
            <Link
              href={`/student-resources/${article.slug}-${article.id}`}
              key={article.id}
              className="group"
            >
              <div className="overflow-hidden shadow-sm hover:shadow-lg md:shadow-none md:hover:shadow-none transition-shadow mb-6">
                <div className="flex">
                  <div className="relative w-40 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={article.image || "/transfer3.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="px-4 flex-1 flex flex-col justify-center">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-2 font-medium">
                      {new Date(article.createdAt)
                        .toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                        .replace(",", "")
                        .toUpperCase()}
                    </div>
                    <h3 className="text-2xl font-medium text-brand-primary transition-colors leading-tight line-clamp-3">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularArticles;
