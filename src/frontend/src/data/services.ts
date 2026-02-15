export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export const services: Service[] = [
  {
    id: 'seo',
    title: 'SEO Services',
    description: 'Comprehensive search engine optimization to boost your rankings and drive organic traffic.',
    icon: 'search',
    link: '/services/seo',
  },
  {
    id: 'ppc',
    title: 'PPC & AdWords Management',
    description: 'Strategic paid advertising campaigns that maximize ROI and reach your target audience.',
    icon: 'target',
  },
  {
    id: 'content',
    title: 'Content Management',
    description: 'Professional content creation and management to engage your audience and build authority.',
    icon: 'file-text',
  },
  {
    id: 'pr',
    title: 'PR & Digital Marketing',
    description: 'Integrated PR and digital marketing strategies to amplify your brand presence.',
    icon: 'megaphone',
  },
  {
    id: 'branding',
    title: 'Branding Solutions',
    description: 'Complete branding services to establish and strengthen your brand identity.',
    icon: 'palette',
  },
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'Custom logo design that captures your brand essence and makes a lasting impression.',
    icon: 'pen-tool',
    link: '/services/logo-design',
  },
  {
    id: 'design',
    title: 'Banner & Brochure Design',
    description: 'Eye-catching marketing materials that communicate your message effectively.',
    icon: 'image',
  },
  {
    id: 'web',
    title: 'Website Design',
    description: 'SEO-optimized website design and development that converts visitors into customers.',
    icon: 'monitor',
  },
];
