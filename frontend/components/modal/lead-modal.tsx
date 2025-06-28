"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown, Send, Calendar } from "lucide-react";
import { useApplicationLead } from "@/hooks/useApplicationLead";
import { toast } from "sonner";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicationModal({
  open,
  onOpenChange,
}: ApplicationModalProps) {
  const [step, setStep] = useState(1);
  const { submitApplication, isLoading, error, resetError } =
    useApplicationLead();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phn_no: "",
    course_preference: "",
    gender: "",
    dob: null as Date | null,
    preffered_intake: "",
    preffered_state: "",
    english_test: "",
    visa: "",
  });

  const [phoneChanged, setPhoneChanged] = useState(0);

  const handleInputChange = (field: string, value: string | Date | null) => {
    if (field === "phn_no") {
      setPhoneChanged((prev) => prev + 1);
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation functions
  const isStep1Complete = () => {
    return (
      formData.first_name.trim() !== "" &&
      formData.last_name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phn_no.trim() !== "" &&
      formData.phn_no.length > 10 &&
      formData.course_preference.trim() !== ""
    );
  };

  const isStep2Complete = () => {
    return (
      formData.gender.trim() !== "" &&
      formData.dob !== null &&
      formData.preffered_intake.trim() !== "" &&
      formData.preffered_state.trim() !== "" &&
      formData.english_test.trim() !== "" &&
      formData.visa.trim() !== ""
    );
  };

  const isFormComplete = () => {
    return isStep1Complete() && isStep2Complete();
  };

  const handleNext = () => {
    if (isStep1Complete()) {
      setStep(2);
      resetError();
    }
  };

  const handleBack = () => {
    setStep(1);
    resetError();
  };

  const handleSubmit = async () => {
    if (isFormComplete()) {
      try {
        // Format the data for submission
        const submissionData = {
          ...formData,
          dob: formData.dob ? formData.dob.toISOString().split("T")[0] : "", // Format as YYYY-MM-DD
        };
        await submitApplication(submissionData);
        toast.success(
          "Application submitted successfully! We'll contact you soon."
        );
        setTimeout(() => {
          onOpenChange(false);
          setStep(1);
          // Reset form data
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phn_no: "",
            course_preference: "",
            gender: "",
            dob: null,
            preffered_intake: "",
            preffered_state: "",
            english_test: "",
            visa: "",
          });
        }, 500);
      } catch (error) {
        console.error("Failed to submit application:", error);
        // Error is handled by the hook
      }
    }
  };

  const SelectField = ({
    placeholder,
    value,
    onChange,
    options = [],
  }: {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    options?: string[];
  }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 bg-gray-100 border-0 rounded-md text-gray-700 appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full p-8">
        <DialogHeader className="">
          <DialogTitle className="text-2xl font-bold text-center text-brand-primary mb-4">
            Apply Now
          </DialogTitle>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
              <button
                onClick={resetError}
                className="ml-2 text-red-700 hover:text-red-900"
              >
                ×
              </button>
            </div>
          )}

          {/* Step Indicators */}
          <div className="flex items-center mb-6">
            <div className="flex items-center relative">
              {/* Step 1 */}
              <div
                onClick={handleBack}
                className={`relative z-10 px-8 py-3 cursor-pointer text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  step === 1
                    ? "bg-slate-700 text-white"
                    : "bg-slate-600 text-white"
                }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)",
                  minWidth: "0px",
                  textAlign: "center",
                }}
              >
                STEP 1
              </div>
              {/* Step 2 */}
              <div
                className={`relative z-10 px-8 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  step === 2
                    ? "bg-orange-500 text-white"
                    : "bg-orange-300 text-white"
                }`}
                style={{
                  clipPath:
                    "polygon(20px 0,calc(100% - 20px) 0,100% 50%,calc(100% - 20px) 100%,20px 100%, 30% 50%",
                  marginLeft: "-32px",
                  minWidth: "120px",
                  textAlign: "right",
                }}
              >
                STEP 2
              </div>
            </div>
          </div>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.first_name}
                onChange={(e) =>
                  handleInputChange("first_name", e.target.value)
                }
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
              />
              <Input
                placeholder="Last Name"
                value={formData.last_name}
                onChange={(e) => handleInputChange("last_name", e.target.value)}
                className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
              />
            </div>

            <Input
              placeholder="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 bg-gray-100 border-0 placeholder:text-gray-500"
            />

            <div
              className={`flex flex-col-reverse react-international-phone-input-container ${
                isLoading ? "disabled" : ""
              }`}
            >
              {formData.phn_no &&
                formData.phn_no.length < 10 &&
                phoneChanged > 2 && (
                  <div className="text-sm text-red-500">
                    Please enter a valid phone number
                  </div>
                )}
              <PhoneInput
                defaultCountry="au"
                value={formData.phn_no}
                onChange={(phone) => handleInputChange("phn_no", phone)}
                disabled={isLoading}
                placeholder="Phone Number"
                inputProps={{
                  required: true,
                  minLength: 8, // Minimum length for most international phone numbers
                }}
                name="phone"
              />
            </div>

            <SelectField
              placeholder="Course preference"
              value={formData.course_preference}
              onChange={(value) =>
                handleInputChange("course_preference", value)
              }
              options={[
                "Computer Science",
                "Business Administration",
                "Engineering",
                "Medicine",
                "Arts & Humanities",
                "Other",
              ]}
            />

            <div className="flex justify-end mt-6">
              <Button
                onClick={handleNext}
                disabled={!isStep1Complete()}
                className="disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <SelectField
                placeholder="Select Gender"
                value={formData.gender}
                onChange={(value) => handleInputChange("gender", value)}
                options={["Male", "Female", "Other", "Prefer not to say"]}
              />
              <div className="relative">
                <div className="react-datepicker-wrapper">
                  <DatePicker
                    selected={formData.dob}
                    onChange={(date) => handleInputChange("dob", date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Date of Birth"
                    showYearDropdown
                    yearDropdownItemNumber={100}
                    scrollableYearDropdown
                    maxDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 16)
                      )
                    }
                    minDate={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 100)
                      )
                    }
                    className="w-full h-12 px-4 bg-gray-100 border-0 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-500"
                    wrapperClassName="w-full"
                  />
                </div>
                <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <SelectField
              placeholder="Preferred Intake"
              value={formData.preffered_intake}
              onChange={(value) => handleInputChange("preffered_intake", value)}
              options={["Fall 2025", "Spring 2026", "Summer 2026", "Fall 2026"]}
            />

            <SelectField
              placeholder="Preferred State"
              value={formData.preffered_state}
              onChange={(value) => handleInputChange("preffered_state", value)}
              options={[
                "New South Wales (NSW)",
                "Victoria (VIC)",
                "Queensland (QLD)",
                "Western Australia (WA)",
                "South Australia (SA)",
                "Tasmania (TAS)",
                "Australian Capital Territory (ACT)",
                "Northern Territory (NT)",
                "Other",
              ]}
            />

            <SelectField
              placeholder="English Test"
              value={formData.english_test}
              onChange={(value) => handleInputChange("english_test", value)}
              options={["IELTS", "TOEFL", "PTE", "Duolingo", "Not taken yet"]}
            />

            <SelectField
              placeholder="Do you hold any Visa"
              value={formData.visa}
              onChange={(value) => handleInputChange("visa", value)}
              options={["Yes", "No", "Applied", "Planning to apply"]}
            />

            <div className="flex justify-end mt-6">
              <Button
                onClick={handleSubmit}
                disabled={!isFormComplete() || isLoading}
                className="flex items-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <span>{isLoading ? "Submitting..." : "Send"}</span>
                {!isLoading && <Send className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
