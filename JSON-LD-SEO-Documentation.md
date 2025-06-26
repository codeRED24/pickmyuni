# JSON-LD SEO Implementation Documentation for PickMyUni

## Overview

This documentation outlines the minimal and necessary JSON-LD structured data implementation for PickMyUni to enhance SEO performance and search engine visibility.

## What is JSON-LD?

JSON-LD (JavaScript Object Notation for Linked Data) is a method of encoding linked data using JSON. It helps search engines understand the content and context of your website, leading to better search rankings and rich snippets.

## Benefits for PickMyUni

- **Enhanced Search Visibility**: Rich snippets in search results
- **Better CTR**: More informative search results attract more clicks
- **Voice Search Optimization**: Structured data helps with voice search queries
- **Knowledge Graph**: Potential inclusion in Google's Knowledge Graph
- **Educational Platform Recognition**: Proper categorization as an educational resource

## Recommended JSON-LD Schema Types for PickMyUni

### 1. Organization Schema (Site-wide)

**Location**: Root layout (`app/layout.tsx`)
**Purpose**: Establishes PickMyUni as a legitimate organization

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "PickMyUni",
  "url": "https://pickmyuni.com",
  "logo": "https://pickmyuni.com/logo.svg",
  "description": "Find and compare the best universities in Australia for international students",
  "sameAs": [
    "https://facebook.com/pickmyuni",
    "https://twitter.com/pickmyuni",
    "https://linkedin.com/company/pickmyuni"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
}
```

### 2. Website Schema (Homepage)

**Location**: Homepage (`app/page.tsx`)
**Purpose**: Defines the website structure and navigation

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "PickMyUni",
  "url": "https://pickmyuni.com",
  "description": "Discover and compare top Australian universities for international students",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pickmyuni.com/university?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 3. Educational Organization Schema (University Pages)

**Location**: Individual university pages (`app/university/[slugAndId]/page.tsx`)
**Purpose**: Properly categorizes universities as educational institutions

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "[University Name]",
  "url": "[University Website]",
  "description": "[University Description]",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU",
    "addressRegion": "[State]",
    "addressLocality": "[City]"
  },
  "foundingDate": "[Founding Year]",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree"
  }
}
```

### 4. Course Schema (Course/Program Pages)

**Location**: Course detail pages
**Purpose**: Helps with course-related searches

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "[Course Name]",
  "description": "[Course Description]",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "[University Name]"
  },
  "educationalCredentialAwarded": "[Degree Type]",
  "timeRequired": "[Duration]",
  "coursePrerequisites": "[Prerequisites]",
  "occupationalCredentialAwarded": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "[Degree Level]"
  }
}
```

### 5. Article Schema (Blog/Resources Pages)

**Location**: Article/blog pages (`app/student-resources/*`)
**Purpose**: Enhances visibility for educational content

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Article Title]",
  "description": "[Article Description]",
  "author": {
    "@type": "Organization",
    "name": "PickMyUni"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PickMyUni",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pickmyuni.com/logo.svg"
    }
  },
  "datePublished": "[Publication Date]",
  "dateModified": "[Last Modified Date]",
  "mainEntityOfPage": "[Article URL]"
}
```

### 6. Breadcrumb Schema (Navigation)

**Location**: All pages with breadcrumbs
**Purpose**: Improves navigation understanding

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pickmyuni.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Universities",
      "item": "https://pickmyuni.com/university"
    }
  ]
}
```

### 7. FAQ Schema (FAQ Pages)

**Location**: FAQ sections and dedicated FAQ pages
**Purpose**: Enables FAQ rich snippets

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer]"
      }
    }
  ]
}
```

## Implementation Strategy

### Phase 1: Core Implementation (Immediate)

1. **Organization Schema** - Root layout
2. **Website Schema** - Homepage
3. **Breadcrumb Schema** - Navigation component

### Phase 2: Content-Specific Implementation (Week 2)

1. **Educational Organization Schema** - University pages
2. **Article Schema** - Blog/resource pages
3. **FAQ Schema** - FAQ sections

### Phase 3: Advanced Implementation (Week 3)

1. **Course Schema** - Course detail pages
2. **Review Schema** - University reviews/testimonials
3. **Local Business Schema** - For physical locations (if applicable)

## Technical Implementation Guidelines

### 1. Component Structure

Create reusable components for JSON-LD:

```
components/
  seo/
    JsonLd.tsx          # Base JSON-LD component
    OrganizationSchema.tsx
    WebsiteSchema.tsx
    EducationalOrgSchema.tsx
    ArticleSchema.tsx
    BreadcrumbSchema.tsx
    FAQSchema.tsx
```

### 2. Data Sources

- University data: Backend API
- Article metadata: CMS or file-based
- Breadcrumb data: Navigation context
- FAQ data: Static or CMS

### 3. Dynamic Content

- University names, descriptions, addresses
- Course details and requirements
- Article titles, dates, authors
- Breadcrumb paths

### 4. Validation

- Use Google's Rich Results Test
- Implement schema validation in development
- Monitor Search Console for structured data errors

## Best Practices

### 1. Content Accuracy

- Ensure all structured data matches visible content
- Keep descriptions concise but informative
- Use official university information

### 2. Performance

- Implement JSON-LD in `<head>` section
- Avoid large schema objects
- Use dynamic imports for complex schemas

### 3. Maintenance

- Regular validation checks
- Update schemas when content changes
- Monitor search performance impact

### 4. Testing

- Test on Google Rich Results Test
- Validate with Schema.org validator
- Check Search Console regularly

## Monitoring and Analytics

### Key Metrics to Track

1. **Rich Snippet Appearances**: Monitor in Search Console
2. **Click-Through Rates**: Before and after implementation
3. **Search Impressions**: Track keyword visibility
4. **Structured Data Errors**: Monitor in Search Console

### Tools for Monitoring

- Google Search Console
- Google Rich Results Test
- Schema.org Validator
- Third-party SEO tools (SEMrush, Ahrefs)

## Expected Outcomes

### Short-term (1-3 months)

- Improved search result appearance
- Better categorization in search engines
- Enhanced local search visibility

### Long-term (3-6 months)

- Increased organic traffic
- Higher click-through rates
- Better search rankings for educational queries
- Potential Knowledge Graph inclusion

## Priority Order for Implementation

1. **High Priority** (Immediate impact)

   - Organization Schema
   - Website Schema
   - Breadcrumb Schema

2. **Medium Priority** (Enhanced visibility)

   - Educational Organization Schema
   - Article Schema
   - FAQ Schema

3. **Low Priority** (Nice to have)
   - Course Schema
   - Review Schema
   - Local Business Schema

## Next Steps

After confirmation:

1. Create reusable JSON-LD components
2. Implement Phase 1 schemas
3. Set up validation and testing process
4. Monitor initial results
5. Proceed with Phase 2 and 3 implementations

---

**Note**: This documentation provides a foundation for minimal yet effective JSON-LD implementation. The schemas can be extended based on specific needs and search performance data.
