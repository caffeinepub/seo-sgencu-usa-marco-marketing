export interface ExternalResource {
  id: string;
  title: string;
  url: string;
  description: string;
  category: 'portfolio' | 'tool';
}

export const externalResources: ExternalResource[] = [
  {
    id: 'canva-site',
    title: 'SEO Services Portfolio',
    url: 'https://marcomarketing.my.canva.site/seo-services-usa',
    description: 'View our comprehensive SEO services portfolio',
    category: 'portfolio',
  },
  {
    id: 'seo-audit-manus',
    title: 'SEO Audit Tool (Manus)',
    url: 'https://seoauditmarco-sfehuapg.manus.space',
    description: 'Advanced SEO audit and analysis tool',
    category: 'tool',
  },
  {
    id: 'lovable-seo',
    title: 'SEO Services Platform',
    url: 'https://seo-services-usa-marcomarketing.lovable.app',
    description: 'Interactive SEO services platform',
    category: 'portfolio',
  },
  {
    id: 'site123',
    title: 'Marco Marketing Site',
    url: 'https://674f3940a5f9b.site123.me',
    description: 'Additional portfolio showcase',
    category: 'portfolio',
  },
  {
    id: 'lovable-marco',
    title: 'Marco Marketing USA',
    url: 'https://marcomarketing-usa.lovable.app',
    description: 'USA-focused marketing services',
    category: 'portfolio',
  },
  {
    id: 'content-genius',
    title: 'Content Genius Tool',
    url: 'https://content-genius-marcomarketing.lovable.app',
    description: 'AI-powered content creation and optimization tool',
    category: 'tool',
  },
  {
    id: 'free-seo-audit',
    title: 'Free SEO Audit Tool',
    url: 'https://free-seo-audit-tool-marcomarketingagency-usa.lovable.app',
    description: 'Get a comprehensive free SEO audit for your website',
    category: 'tool',
  },
];
