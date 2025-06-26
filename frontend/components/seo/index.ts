// SEO Components exports
export { default as JsonLd } from "./JsonLd";
export { default as OrganizationSchema } from "./OrganizationSchema";
export { default as WebsiteSchema } from "./WebsiteSchema";
export { default as BreadcrumbSchema } from "./BreadcrumbSchema";

// Types
export interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}
