"use client";
import { useCity } from "@/hooks/useCity";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default function PrPath({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  // Split into slug and id
  const parts = id.split("-");
  const cityid = parts.pop(); // last part is ID
  const slug = parts.join("-"); // rest is slug

  if (!cityid || isNaN(Number(cityid))) {
    notFound();
  }

  const { city, error, loading } = useCity(Number(cityid));

  if (loading) return <h1>Loading...</h1>;
  if (error) return <div>Error: {error}</div>;
  if (!city) return <h1>City not found</h1>;

  console.log({ city });
  console.log({ slug });

  // If the slug is incorrect, redirect to correct URL
  if (city.city.slug && slug !== city.city.slug) {
    redirect(`/city/${city.city.slug}-${city.city.id}`);
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <Image
            src="/globe.png"
            alt="Library with books on shelves"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto pb-8">
              <h1 className="max-w-[850px] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Get Enrolled in the Best Universities in {city?.city.name}
              </h1>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-20">
          {city?.city.content && (
            <div
              className=" prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: city.city.content }}
            />
          )}
        </div>
      </div>
    </>
  );
}
