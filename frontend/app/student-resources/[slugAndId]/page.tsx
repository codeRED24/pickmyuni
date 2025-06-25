import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import SocialShare from "@/components/SocialShare";
import ArticleContent from "@/components/ArticleContent";
import { Article } from "@/types/search";
import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  combineSchemas,
} from "@/lib/jsonld";

async function getArticle(id: number): Promise<Article | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/${id}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch article: ${response.status}`);
    }

    const data = await response.json();
    return data.data.article;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugAndId: string }>;
}): Promise<Metadata> {
  const { slugAndId } = await params;

  // Split into slug and id
  const parts = slugAndId.split("-");
  const id = parts.pop();

  if (!id || isNaN(Number(id))) {
    return {
      title: "Article Not Found | PickMyUni",
      description:
        "The requested article could not be found. Explore our other student resources and guides for studying in Australia.",
    };
  }

  const article = await getArticle(Number(id));

  if (!article) {
    return {
      title: "Article Not Found | PickMyUni",
      description:
        "The requested article could not be found. Explore our other student resources and guides for studying in Australia.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pickmyuni.com";
  const articleUrl = `${siteUrl}/student-resources/${article.slug}-${article.id}`;

  return {
    title: `${article.title} | PickMyUni`,
    description:
      article.meta_desc ||
      `${article.title} - Expert advice and guidance for international students studying in Australia.`,
    keywords: [
      "student resources Australia",
      "study abroad tips",
      "international student guide",
      "Australian university advice",
      "student life Australia",
      "education blog",
      article.title.toLowerCase(),
    ],
    openGraph: {
      title: article.title,
      description: article.meta_desc || article.title,
      url: articleUrl,
      siteName: "PickMyUni",
      type: "article",
      publishedTime: article.createdAt,
      images: article.image
        ? [
            {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.meta_desc || article.title,
      images: article.image ? [article.image] : [],
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slugAndId: string }>;
}) {
  const { slugAndId } = await params;

  // Split into slug and id
  const parts = slugAndId.split("-");
  const id = parts.pop(); // last part is ID
  const slug = parts.join("-"); // rest is slug

  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const article = await getArticle(Number(id));

  if (!article) {
    notFound();
  }

  // If the slug is incorrect, redirect to correct URL
  if (article.slug && slug !== article.slug) {
    redirect(`/student-resources/${article.slug}-${article.id}`);
  }

  // Generate the current page URL for social sharing
  const currentUrl = `${
    process.env.NEXT_PUBLIC_SITE_URL || "https://pickmyuni.com"
  }/student-resources/${article.slug}-${article.id}`;

  // Generate structured data for SEO
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.meta_desc || article.title,
    url: currentUrl,
    datePublished: article.createdAt,
    dateModified: article.createdAt,
    author: "PickMyUni",
    image: article.image,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://pickmyuni.com" },
    {
      name: "Student Resources",
      url: "https://pickmyuni.com/student-resources",
    },
    { name: article.title, url: currentUrl },
  ]);

  const structuredData = combineSchemas(articleSchema, breadcrumbSchema);

  return (
    <div className="bg-white font-sans">
      {/* Structured Data */}
      <JsonLd data={structuredData} />
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
          <div className="container mx-auto pb-8 text-center">
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
      </section>{" "}
      <section className="container mx-auto py-8 md:py-12 lg:py-16">
        <ArticleContent content={article.content} />
        <SocialShare
          title={article?.title || "Test Article"}
          url={currentUrl}
        />
      </section>
    </div>
  );
}
