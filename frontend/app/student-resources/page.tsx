import StudentResources from "@/components/student-resources";
import Image from "next/image";
import React from "react";

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
