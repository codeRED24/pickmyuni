"use client";
import { useUniversity } from "@/hooks/useUniversity";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { notFound, redirect } from "next/navigation";
import { ApplicationModal } from "../modal/lead-modal";

function UniLayout({ params }: { params: Promise<{ slugAndId: string }> }) {
  const { slugAndId } = React.use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Split into slug and id
  const parts = slugAndId.split("-");
  const id = parts.pop(); // last part is ID
  const slug = parts.join("-"); // rest is slug

  const { college, loading, error } = useUniversity(Number(id));

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>{""}</div>;
  if (!college) {
    notFound();
    return null;
  }

  console.log({ college });

  const correctSlug = college.slug;

  console.log(college.slug, college.id);

  // If the slug is incorrect, redirect to correct URL
  if (slug !== correctSlug) {
    redirect(`/university/${correctSlug}-${college.id}`);
  }

  return (
    <div className="bg-blue-50">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
        <Image
          src="/transfer.svg" // Background image
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />

        {/* University Logo */}
        <div className="absolute inset-x-0 -bottom-10 sm:-bottom-12 flex xl:container justify-center xl:justify-start z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-lg border border-gray-300">
            <Image
              src="/benefit7.svg" // Logo image
              alt="University Logo"
              width={60}
              height={60}
              className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            />
          </div>
        </div>
      </div>

      {/* University Name and Address */}
      <div className="max-w-6xl mx-auto py-12 px-16">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
          {/* University Info */}
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 leading-tight">
              {college?.college_name}
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
              {college?.location}
            </p>
          </div>

          {/* Enquire Button */}
          <div className="flex justify-center sm:justify-end">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium flex items-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <span>Enquire Now</span>
              <Image
                src="/logo-button.svg"
                alt="Icon"
                width={24}
                height={24}
                className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}

export default UniLayout;
