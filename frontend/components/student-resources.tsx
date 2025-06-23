"use client";

import { useTopArticles } from "@/hooks/useTopArticles";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Article } from "@/types/search";
import PopularArticles from "./PopularArticles";
import RecentArticles from "./RecentArticles";
import { Button } from "./ui/button";

function getLimitByScreenSize(width: number): number {
  if (width < 640) return 70; // mobile
  if (width < 1024) return 100; // tablet
  return 600; // desktop
}

function stripHtmlAndTruncate(html: string, limit: number): string {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || "";
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

function StudentResources() {
  const { articles, loading, error } = useTopArticles();

  const [charLimit, setCharLimit] = useState(100);

  useEffect(() => {
    function handleResize() {
      setCharLimit(getLimitByScreenSize(window.innerWidth));
    }

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <div>
        {/* Loading skeleton for 2 main articles */}
        <section className="container mx-auto py-16">
          <div className="flex flex-col gap-8">
            {[1, 2].map((index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "" : "md:flex-row-reverse"
                } bg-white rounded-lg overflow-hidden mb-6`}
              >
                {/* Image Section Skeleton */}
                <div className="w-full md:w-1/3 h-64 md:h-auto">
                  <div className="w-full h-full bg-gray-200 animate-pulse rounded-xl" />
                </div>

                {/* Content Section Skeleton */}
                <div className="w-full md:w-2/3 p-6">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2" />
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
                  </div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse w-24" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loading skeleton for Popular Articles section */}
        <section className="bg-orange-50">
          <div className="container mx-auto py-16">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-64 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="w-full h-48 bg-gray-200 animate-pulse rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2" />
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loading skeleton for Recent Articles section */}
        <section className="container mx-auto py-24 flex justify-center flex-col">
          <div className="h-8 bg-gray-200 rounded animate-pulse w-64 mb-8 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="w-full h-48 bg-gray-200 animate-pulse rounded mb-4" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full mb-2" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-brand-primary">Recent</span>{" "}
            <span className="text-brand-secondary">Articles</span>
          </h2>
          <div className="text-center text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  console.log(articles);

  return (
    <div>
      {/* 2 blogs */}
      <section className="container mx-auto py-16">
        <div className="flex flex-col gap-8">
          {articles?.slice(0, 2).map((article: Article, index: number) => (
            <div
              key={article.id}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg md:shadow-none md:hover:shadow-none transition-shadow mb-6`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden rounded-xl">
                <Image
                  src={article.image || "/transfer3.svg"} // Replace with real image path
                  alt={article.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 p-6">
                <div className="flex items-center text-sm font-normal text-gray-500 mb-2">
                  <span>
                    {new Date(article.createdAt)
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </span>
                </div>
                <Link
                  className="cursor-pointer"
                  href={`/student-resources/${article.id}`}
                >
                  <h3 className="font-medium text-4xl  text-brand-primary mb-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-lg font-normal mb-4">
                  {stripHtmlAndTruncate(article.content, charLimit)}
                </p>
                <Link href={`/student-resources/${article.id}`}>
                  <Button variant={"secondary"}>Read More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-50">
        <div className="container mx-auto py-16">
          <h2 className="text-4xl font-semibold text-brand-primary">
            Most Popular <span className="text-brand-secondary">Articles</span>
          </h2>
          {/* 4 cards of most popular articles */}
          <PopularArticles />
        </div>
      </section>

      <section className="container mx-auto py-24 flex justify-center flex-col">
        <h2 className="text-4xl font-semibold text-brand-primary mb-4 text-center">
          Most Recent <span className="text-brand-secondary">Articles</span>
        </h2>
        <RecentArticles />
      </section>
    </div>
  );
}

export default StudentResources;
