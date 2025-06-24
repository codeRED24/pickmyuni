import StudentResources from "@/components/student-resources";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Student Resources & Blog | PickMyUni - Study Abroad Tips & Guides",
  description:
    "Access comprehensive student resources, study abroad guides, university tips, and expert advice for international students planning to study in Australia.",
  keywords: [
    "student resources Australia",
    "study abroad blog",
    "international student tips",
    "university guides",
    "Australian education blog",
    "student life Australia",
    "study tips",
    "university preparation",
  ],
  openGraph: {
    title: "Student Resources & Blog | PickMyUni",
    description:
      "Access comprehensive guides and tips for studying in Australia. Get expert advice for your educational journey.",
    type: "website",
  },
};

function page() {
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
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Blog
            </h1>
          </div>
        </div>
      </section>
      <StudentResources />
    </div>
  );
}

export default page;
