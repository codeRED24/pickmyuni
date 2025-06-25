import React from "react";

interface JsonLdProps {
  data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

// Utility function to safely render JSON-LD
export function renderJsonLd(data: any) {
  if (typeof window !== "undefined") {
    return null; // Don't render on client side to avoid hydration issues
  }

  return <JsonLd data={data} />;
}
