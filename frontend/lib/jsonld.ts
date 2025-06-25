// JSON-LD Schema types
export interface JsonLdProps {
  data: any;
}

// Base organization schema
export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://pickmyuni.com/#organization",
  name: "PickMyUni",
  description:
    "Find and compare the best universities in Australia. Expert guidance for international students.",
  url: "https://pickmyuni.com",
  logo: {
    "@type": "ImageObject",
    url: "https://pickmyuni.com/logo.svg",
    width: 300,
    height: 100,
  },
  sameAs: [
    "https://www.facebook.com/pickmyuni",
    "https://www.instagram.com/pickmyuni",
    "https://www.linkedin.com/company/pickmyuni",
    "https://twitter.com/pickmyuni",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61433502082",
    contactType: "customer service",
    areaServed: "AU",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
    addressRegion: "Australia",
  },
};

// Website schema
export const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://pickmyuni.com/#website",
  url: "https://pickmyuni.com",
  name: "PickMyUni",
  description:
    "Find and compare the best universities in Australia. Explore courses, rankings, scholarships, and more.",
  publisher: {
    "@id": "https://pickmyuni.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://pickmyuni.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Generate breadcrumb schema
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate university schema
export function generateUniversitySchema(university: {
  name: string;
  description: string;
  url: string;
  logo?: string;
  address?: string;
  city?: string;
  state?: string;
  ranking?: number;
}): any {
  return {
    "@type": "EducationalOrganization",
    name: university.name,
    description: university.description,
    url: university.url,
    ...(university.logo && {
      logo: {
        "@type": "ImageObject",
        url: university.logo,
      },
    }),
    ...(university.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: university.address,
        addressLocality: university.city,
        addressRegion: university.state,
        addressCountry: "AU",
      },
    }),
    ...(university.ranking && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: Math.max(1, 5 - university.ranking / 100),
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

// Generate article schema
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}): any {
  return {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "PickMyUni",
      url: "https://pickmyuni.com",
    },
    publisher: {
      "@id": "https://pickmyuni.com/#organization",
    },
    ...(article.image && {
      image: {
        "@type": "ImageObject",
        url: article.image,
      },
    }),
  };
}

// Generate course schema
export function generateCourseSchema(course: {
  name: string;
  description: string;
  provider: string;
  url: string;
  duration?: string;
  fees?: number;
  studyMode?: string;
}): any {
  return {
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: course.provider,
    },
    url: course.url,
    ...(course.duration && {
      timeRequired: course.duration,
    }),
    ...(course.fees && {
      offers: {
        "@type": "Offer",
        price: course.fees,
        priceCurrency: "AUD",
      },
    }),
    ...(course.studyMode && {
      courseMode: course.studyMode,
    }),
  };
}

// Helper function to combine multiple schemas
export function combineSchemas(...schemas: any[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

// Default home page schema
export const homePageSchema = combineSchemas(organizationSchema, websiteSchema);

// Generate course search results schema
export function generateCourseSearchSchema(courses: any[]) {
  return {
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.name,
        description: course.description,
        provider: {
          "@type": "EducationalOrganization",
          name: course.provider,
        },
        ...(course.url && { url: course.url }),
        ...(course.fees && {
          offers: {
            "@type": "Offer",
            price: course.fees,
            priceCurrency: "AUD",
          },
        }),
      },
    })),
  };
}

// Generate search results schema
export function generateSearchResultsSchema(searchQuery: string, results: any) {
  return {
    "@type": "SearchResultsPage",
    "@id": `https://pickmyuni.com/search?q=${encodeURIComponent(
      searchQuery
    )}#webpage`,
    url: `https://pickmyuni.com/search?q=${encodeURIComponent(searchQuery)}`,
    name: `Search Results for "${searchQuery}" | PickMyUni`,
    description: `Find universities, courses, and resources related to "${searchQuery}" in Australia.`,
    isPartOf: {
      "@id": "https://pickmyuni.com/#website",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://pickmyuni.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    ...(results && {
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: results.total || 0,
        itemListElement:
          results.items?.slice(0, 5).map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": item.type || "Thing",
              name: item.name || item.title,
              url: item.url,
              description: item.description,
            },
          })) || [],
      },
    }),
  };
}

// Generate review schema
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  itemReviewed: {
    name: string;
    type: string;
  };
}) {
  return {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      "@type": review.itemReviewed.type,
      name: review.itemReviewed.name,
    },
  };
}

// Generate local business schema (for contact/office info)
export function generateLocalBusinessSchema() {
  return {
    "@type": ["Organization", "EducationalOrganization"],
    "@id": "https://pickmyuni.com/#organization",
    name: "PickMyUni",
    description:
      "Leading education consultancy helping international students find the perfect Australian university.",
    url: "https://pickmyuni.com",
    telephone: "+61433502082",
    email: "info@pickmyuni.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "Australia",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceArea: {
      "@type": "Country",
      name: "Australia",
    },
    knowsAbout: [
      "Australian Universities",
      "International Student Services",
      "University Admissions",
      "Student Visa Assistance",
      "Higher Education Consulting",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Education Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "University Comparison",
            description:
              "Compare Australian universities based on courses, fees, and rankings",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Admission Guidance",
            description:
              "Expert guidance for university admissions and applications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Student Resources",
            description:
              "Comprehensive resources and guides for international students",
          },
        },
      ],
    },
  };
}
