"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContact } from "@/hooks/useContact";
import { toast } from "sonner";
import ContactForm from "@/components/form/contact-form";

interface ConsultationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConsultationModal({
  open,
  onOpenChange,
}: ConsultationModalProps) {
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
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      // Submit new data with phone to API
      await submitContactForm(formData);
      // Success - show toast and close modal
      toast.success("Request sent successfully!");
      setTimeout(() => {
        onOpenChange(false);
        resetForm();
      }, 2000); // Close modal after 2 seconds
    } catch (error) {
      // Error state will be handled by the hook
      console.error("Failed to submit contact form:", error);
    }
  };

  const handleModalChange = (open: boolean) => {
    if (!open) {
      resetForm();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleModalChange}>
      <DialogContent className="max-w-lg w-full mx-4 p-8">
        <DialogHeader className="text-center mb-6">
          <DialogTitle className="text-2xl font-bold text-brand-primary mb-2">
            Request a Free{" "}
            <span className="text-brand-secondary">Consultation</span>
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-lg font-semibold mb-2">
              ✅ Request sent successfully!
            </div>
            <p className="text-gray-600">We&apos;ll get back to you soon.</p>
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
      </DialogContent>
    </Dialog>
  );
}
