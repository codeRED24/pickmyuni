"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactWrapper from "../modal/contact-wrapper";

export default function CheckEligibility() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-24 mb-16 bg-[#FAF4F0] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
      <div>
        <h3 className="text-[28px] sm:text-[26px] font-semibold leading-tight text-brand-primary mb-2">
          Check Eligibility for Admission
        </h3>
      </div>
      <div className="mt-4 md:mt-0 max-h-10 flex gap-24 sm:gap-0 sm:items-center">
        <Button variant={"secondary"} size={"lg"} onClick={() => setOpen(true)}>
          Check Now
        </Button>
        <Image
          src="/logo.svg"
          alt="Graduation cap"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
          className="ml-4 md:flex w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44"
          loading="lazy"
        />
        <ContactWrapper open={open} onOpenChange={setOpen} />
      </div>
    </div>
  );
}
