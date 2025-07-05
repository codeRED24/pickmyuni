/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Loader2, Send } from "lucide-react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Textarea } from "../ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { Controller } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  form: UseFormReturn<ContactFormData>;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

function ContactForm({
  form,
  handleSubmit,
  isLoading,
  error,
}: ContactFormProps) {
  const {
    register,
    control,
    formState: { errors },
  } = form;
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-center space-x-2 text-red-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Input
            placeholder="First Name"
            {...register("firstName")}
            className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
            disabled={isLoading}
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="space-y-1">
          <Input
            placeholder="Last Name"
            {...register("lastName")}
            className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
            disabled={isLoading}
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <Input
          placeholder="Email Address"
          type="email"
          {...register("email")}
          className="h-12 bg-gray-100 border-0 placeholder:text-gray-500 rounded-md"
          disabled={isLoading}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="space-y-1">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div
              className={`react-international-phone-input-container ${
                isLoading ? "disabled" : ""
              }`}
            >
              <PhoneInput
                className="flex-grow"
                defaultCountry="au"
                value={field.value}
                onChange={field.onChange}
                disabled={isLoading}
                placeholder="Phone Number"
                inputProps={{
                  minLength: 8,
                }}
                name="phone"
              />
            </div>
          )}
        />
        {errors.phone && (
          <span className="text-sm text-red-500">{errors.phone.message}</span>
        )}
      </div>

      <div className="space-y-1">
        <Textarea
          placeholder="How may help you"
          {...register("message")}
          className="w-full h-24 px-4 py-3 bg-gray-100 border-0 rounded-md text-gray-700 placeholder:text-gray-500 resize-none focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>

      <div className="flex justify-end mt-6">
        <Button
          type="submit"
          disabled={isLoading}
          className="flex items-center space-x-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
