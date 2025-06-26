import React from "react";
import JsonLd from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb Schema component
 * Helps search engines understand page hierarchy
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };

  return <JsonLd data={breadcrumbData} />;
}
