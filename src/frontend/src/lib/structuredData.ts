export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marco Marketing',
    alternateName: 'SEO Agency USA',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' 
      ? `${window.location.origin}/assets/generated/marco-marketing-logo-uploaded.dim_512x512.png`
      : '',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'marcomarketing.ali786@gmail.com',
      contactType: 'Customer Service',
      areaServed: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/in/seo-services-usa-ali',
      'https://www.instagram.com/seo.services_usa',
    ],
  };
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Marco Marketing - SEO Agency USA',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    description: 'Professional SEO and digital marketing services for businesses across the USA',
    publisher: {
      '@type': 'Organization',
      name: 'Marco Marketing',
      logo: {
        '@type': 'ImageObject',
        url: typeof window !== 'undefined' 
          ? `${window.location.origin}/assets/generated/marco-marketing-logo-uploaded.dim_512x512.png`
          : '',
      },
    },
  };
}

export function createBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  content: string;
  createdAt: bigint;
  updatedAt: bigint;
  authorDisplayName?: string;
  slug: string;
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    articleBody: post.content,
    datePublished: new Date(Number(post.createdAt) / 1000000).toISOString(),
    dateModified: new Date(Number(post.updatedAt) / 1000000).toISOString(),
    author: {
      '@type': 'Person',
      name: post.authorDisplayName || 'Marco Marketing Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Marco Marketing',
      logo: {
        '@type': 'ImageObject',
        url: `${origin}/assets/generated/marco-marketing-logo-uploaded.dim_512x512.png`,
      },
    },
    url: `${origin}/blog/${post.slug}`,
  };
}

export function createFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createCombinedSchema(...schemas: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
