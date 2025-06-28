"use client";
import { useContact } from "@/hooks/useContact";
import ContactForm from "./contact-form";
import { ContactValidationSchema } from "../modal/contact-modal";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactFormWrapper() {
  const { submitContactForm, isLoading, error, success } = useContact();

  const form = useForm<ContactFormData>({
    resolver: yupResolver(ContactValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // const resetForm = () => {
  //   form.reset();
  //   resetState();
  // };

  const handleSubmit = async (data: ContactFormData) => {
    try {
      await submitContactForm(data);
      toast.success("Request sent successfully!");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
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
      form={form}
      handleSubmit={form.handleSubmit(handleSubmit)}
      isLoading={isLoading}
      error={error}
    />
  );
}
