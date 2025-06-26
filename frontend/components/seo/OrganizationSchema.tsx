import React from "react";
import JsonLd from "./JsonLd";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    contactType: string;
    availableLanguage: string;
  };
}

/**
 * Organization Schema component for PickMyUni
 * Should be included in the root layout
 */
export default function OrganizationSchema({
  name = "PickMyUni",
  url = "https://pickmyuni.com",
  logo = "https://pickmyuni.com/logo.svg",
  description = "Find and compare the best universities in Australia for international students",
  sameAs = [
    "https://facebook.com/pickmyuni",
    "https://twitter.com/pickmyuni",
    "https://linkedin.com/company/pickmyuni",
  ],
  contactPoint = {
    contactType: "customer service",
    availableLanguage: "English",
  },
}: OrganizationSchemaProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
  };

  return <JsonLd data={organizationData} />;
}
