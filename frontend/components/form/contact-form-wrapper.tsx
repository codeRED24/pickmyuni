"use client";

import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import ContactForm from "./contact-form";

export default function ContactFormWrapper() {
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
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 5) {
      return;
    }
    try {
      await submitContactForm(formData);
      setTimeout(() => {
        resetForm();
      }, 2000);
    } catch (error) {
      // Error state handled by hook
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-green-600 text-lg font-semibold mb-2">
          ✅ Request sent successfully!
        </div>
        <p className="text-gray-600">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <ContactForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
}
