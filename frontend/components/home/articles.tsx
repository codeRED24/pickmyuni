"use client";
import Link from "next/link";
import { ArticlesLoadingSkeleton } from "@/components/skeleton/article-skeleton";
import { useTopArticles } from "@/hooks/useTopArticles";
import { Button } from "../ui/button";
import Image from "next/image";

interface Article {
  id: number;
  _id?: string;
  title: string;
  meta_desc: string;
  description?: string;
  author?: string;
  published_date?: string;
  createdAt?: string;
  slug?: string;
  image?: string;
  category?: string;
}

const arr = [
  "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/pr_path1.webp",
  "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/pr_path2.webp",
  "https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/pr_path3.webp",
];

export const randomImage = () => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default function ArticlesSection() {
  const { articles, loading, error } = useTopArticles();

  if (loading) {
    return <ArticlesLoadingSkeleton />;
  }

  if (error) {
    return;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold leading-tight text-center mb-12">
          <span className="text-brand-primary">Recent</span>{" "}
          <span className="text-brand-secondary">Articles</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {articles?.splice(0, 3).map((article: Article) => (
            <div
              key={article.id}
              className="bg-[#F6F6F7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={article.image || randomImage()}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{article.category || "GENERAL"}</span>
                  <span className="mx-2">•</span>
                  <span>
                    {article.createdAt
                      ? new Date(article.createdAt)
                          .toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                          .toUpperCase()
                      : "DATE NOT AVAILABLE"}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-brand-primary mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/student-resources/${article.slug}-${article.id}`}
                  className="text-brand-secondary font-medium text-sm hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}

          {articles?.length > 3 && (
            <div className="flex justify-center mt-8">
              <Button>View All Articles</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
