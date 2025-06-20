"use client";
import ArticlePageSkeleton from "@/components/skeleton/article-page-skeleton";
import { useArticle } from "@/hooks/useArticle";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function Page({
  params,
}: {
  params: Promise<{ slugAndId: string }>;
}) {
  const { slugAndId } = React.use(params);

  // Split into slug and id
  const parts = slugAndId.split("-");
  const id = parts.pop(); // last part is ID
  const slug = parts.join("-"); // rest is slug

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const { article, loading, error } = useArticle(Number(id));

  if (loading) return <ArticlePageSkeleton />;
  if (error) return <div>Error: {error}</div>;
  if (!article) return notFound();

  // If the slug is incorrect, redirect to correct URL
  if (article.slug && slug !== article.slug) {
    redirect(`/student-resources/${article.slug}-${article.id}`);
  }

  // Social media sharing functions

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || "");
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || "");
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    window.open(twitterUrl, "width=600,height=400");
  };

  const InstagramHandleShare = () => {
    toast.success("Article link copied to clipboard!");
    navigator.clipboard.writeText(window.location.href);
  };

  console.log(article);
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[336px] text-white">
        <Image
          src="/transfer.svg"
          alt="University campus background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 pb-8 text-center">
            {/* Date Badge */}
            {article?.createdAt && (
              <div className="inline-block bg-orange-500 text-white px-4 py-2 text-sm font-medium mb-4 uppercase">
                {new Date(article.createdAt)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toUpperCase()}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {article?.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {article?.content && (
          <div
            className="prose max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        <div className="bg-gradient-to-r from-gray-200 to-gray-100/10 py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-normal italic">
            Share This Article on Favourite Social Platform
          </h2>
          <div className="flex gap-4">
            <Image
              src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
              alt="Facebook Share"
              width={30}
              height={30}
              className="cursor-pointer hover:scale-110 transition-all"
              onClick={shareOnFacebook}
            />
            <Image
              src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000"
              alt="Twitter Share"
              width={30}
              height={30}
              className="cursor-pointer hover:scale-110 transition-all"
              onClick={shareOnTwitter}
            />
            <Image
              src="https://img.icons8.com/?size=100&id=0GU4b5gZ4PdA&format=png&color=000000"
              alt="Instagram Share"
              width={30}
              height={30}
              className="cursor-pointer hover:scale-110 transition-all"
              onClick={InstagramHandleShare}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
