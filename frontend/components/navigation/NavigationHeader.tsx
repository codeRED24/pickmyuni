"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplicationModal } from "@/components/modal/lead-modal";
import { ConsultationModal } from "@/components/modal/contact-modal";
import { cn } from "@/lib/utils";

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-blue-800 font-bold text-xl">
              <Image
                src="https://pickmyuni-bucket.s3.ap-southeast-2.amazonaws.com/static/header_logo.webp"
                alt="Logo"
                width={150}
                height={150}
              />
            </div>
          </Link>
          <div className="flex gap-10">
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-800">
                Home
              </Link>
              <Link
                href="/compare"
                className="text-gray-600 hover:text-blue-800"
              >
                Compare
              </Link>
              <Link
                href="/pr-path"
                className="text-gray-600 hover:text-blue-800"
              >
                PR Pathway
              </Link>
              <Link
                href="/transfer-assistance"
                className="text-gray-600 hover:text-blue-800"
              >
                Transfer Assistance
              </Link>
              <Link
                href="/student-resources"
                className="text-gray-600 hover:text-blue-800"
              >
                Student Resources
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden xl:flex items-center space-x-3">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-800 hover:bg-blue-900 text-white"
              >
                Apply Now
              </Button>
              <Button
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Request a Free Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("xl:hidden", isOpen ? "block" : "hidden")}>
          <div className="flex flex-col space-y-4 pt-4 pb-3">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-800"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/compare"
              className="text-gray-600 hover:text-blue-800"
              onClick={closeMenu}
            >
              Compare
            </Link>
            <Link
              href="/pr-path"
              className="text-gray-600 hover:text-blue-800"
              onClick={closeMenu}
            >
              PR Pathway
            </Link>
            <Link
              href="/transfer-assistance"
              className="text-gray-600 hover:text-blue-800"
              onClick={closeMenu}
            >
              Transfer Assistance
            </Link>
            <Link
              href="/student-resources"
              className="text-gray-600 hover:text-blue-800"
              onClick={closeMenu}
            >
              Student Resources
            </Link>
            <Button
              onClick={() => {
                setIsModalOpen(true);
                closeMenu();
              }}
              className="bg-blue-800 hover:bg-blue-900 text-white w-full"
            >
              Apply Now
            </Button>
            <Button
              onClick={() => {
                setIsConsultationModalOpen(true);
                closeMenu();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white w-full"
            >
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      <ConsultationModal
        open={isConsultationModalOpen}
        onOpenChange={setIsConsultationModalOpen}
      />
    </div>
  );
}
