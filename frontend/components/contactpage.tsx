"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react"; // Added Phone, Mail, MapPin
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/form/contact-form";
import { useContact } from "@/hooks/useContact";
import { toast } from "sonner";

export default function ContactPage() {
  const { submitContactForm, isLoading, error, success, resetState } =
    useContact();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    resetState();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if phone number is valid (not just country code)
    // Most country codes are 1-3 digits, so we ensure phone is longer than country code + "+"
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 5) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      await submitContactForm(formData);
      toast.success("Request sent successfully!");

      // Success - form will show success state
      setTimeout(() => {
        resetForm();
      }, 2000); // Reset form after 2 seconds
    } catch (error) {
      // Error state will be handled by the hook
      console.error("Failed to submit contact form:", error);
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        <Image
          src="/contactus.svg"
          alt="Library with books on shelves"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <section className="mt-20 container mx-auto px-4 py-12">
        {/* Lets Talk Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Text Content */}
          <div className="lg:w-2/5">
            <h2 className="text-6xl font-normal text-blue-800">
              Let&apos;s Talk About <br />
              <span className="text-blue-800 font-bold">Your</span>{" "}
              <span className="text-orange-500 font-bold">Concern</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
              dictum purus. Nullam non mollis metus. Suspendisse cursus ornare
              ultrices.
            </p>
          </div>

          {/* Right Form Content */}
          <div className="lg:w-3/5">
            {success ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-lg font-semibold mb-2">
                  ✅ Request sent successfully!
                </div>
                <p className="text-gray-600">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <ContactForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                error={error}
              />
            )}
          </div>
        </div>

        {/* Contact Cards Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-orange-500/10 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">CALL US NOW</h3>
              <p className="mt-1 text-gray-700">+61 430 190 323</p>
              <p className="text-sm text-gray-500">24/7 Support</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-500/10 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">
                DROP US AN EMAIL
              </h3>
              <p className="mt-1 text-gray-700">info@pickmyuni.com.au</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-500/10 shadow-lg">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mt-4 font-semibold text-blue-700">ADDRESS</h3>
              <p className="mt-1 text-gray-700">
                Suite 204, Level 2, 227 Collins Street,
                <br />
                Melbourne, VIC, Australia
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* map section */}
      <section className="relative h-[700px] mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385142534!2d144.96549531531787!3d-37.81528397975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5b425ba07%3A0x834e71eeb27d391f!2s227%20Collins%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1655123456789!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
