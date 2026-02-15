import { useNavigate } from '@tanstack/react-router';
import { CheckCircle2 } from 'lucide-react';
import { useSEO } from '../../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createFAQPageSchema } from '../../lib/structuredData';
import CtaButton from '../../components/CtaButton';
import PricingTable from '../../components/services/PricingTable';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is SEO and why is it important for my business?',
    answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It\'s crucial because higher rankings lead to more organic traffic, increased brand visibility, and better ROI compared to paid advertising.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer: 'Typically, you can expect to see initial improvements within 3-6 months. However, SEO is a long-term strategy, and significant results often become apparent after 6-12 months of consistent optimization efforts.',
  },
  {
    question: 'What makes Marco Marketing different from other SEO agencies in the USA?',
    answer: 'We combine deep USA market expertise with data-driven strategies and transparent reporting. Our focus on quality over quantity, affordable pricing, and proven track record sets us apart from other agencies.',
  },
  {
    question: 'Do you offer local SEO services for USA businesses?',
    answer: 'Yes, we specialize in local SEO optimization for businesses targeting specific USA markets. This includes Google Business Profile optimization, local citations, and location-specific content strategies.',
  },
  {
    question: 'What\'s included in your SEO packages?',
    answer: 'Our packages include keyword research, on-page optimization, technical SEO audits, content strategy, link building, competitor analysis, and monthly performance reports. Higher-tier packages include additional services like content creation and dedicated account management.',
  },
  {
    question: 'Can you help with both on-page and off-page SEO?',
    answer: 'Absolutely. We provide comprehensive SEO services covering all aspects: on-page optimization (content, meta tags, site structure), technical SEO (site speed, mobile optimization), and off-page SEO (link building, brand mentions).',
  },
];

export default function SeoServicesPage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useSEO({
    title: 'SEO Services USA - Marco Marketing | Expert SEO',
    description: 'Expert SEO Services in the USA. Marco Marketing delivers comprehensive search engine optimization strategies that boost rankings and drive organic traffic.',
    canonical: `${origin}/services/seo`,
    jsonLd: createCombinedSchema(createOrganizationSchema(), createFAQPageSchema(faqs)),
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Professional SEO Services in the USA
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Marco Marketing delivers expert SEO services across the USA. Our data-driven 
              strategies help businesses dominate search rankings, increase organic traffic, 
              and achieve sustainable growth in competitive markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CtaButton size="lg">
                Get Your Free SEO Audit
              </CtaButton>
              <CtaButton variant="outline" size="lg" onClick={() => navigate({ to: '/about' })}>
                Learn About Us
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Comprehensive SEO Solutions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to succeed in search engines
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Keyword Research & Strategy',
              'On-Page SEO Optimization',
              'Technical SEO Audits',
              'Content Strategy & Creation',
              'Link Building Campaigns',
              'Local SEO for USA Markets',
              'Competitor Analysis',
              'E-commerce SEO',
              'Mobile SEO Optimization',
              'SEO Analytics & Reporting',
              'International SEO',
              'SEO Consulting',
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our SEO Services */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Our SEO Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Proven expertise in delivering results for USA businesses
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'USA Market Expertise',
                description: 'Deep understanding of USA search behavior, local markets, and regional SEO strategies that drive results.',
              },
              {
                title: 'Data-Driven Approach',
                description: 'Every decision backed by analytics and performance data to ensure maximum ROI for your investment.',
              },
              {
                title: 'White-Hat Techniques',
                description: 'Ethical, sustainable SEO practices that comply with search engine guidelines and protect your brand.',
              },
              {
                title: 'Transparent Reporting',
                description: 'Clear, detailed monthly reports showing rankings, traffic, conversions, and actionable insights.',
              },
              {
                title: 'Customized Strategies',
                description: 'Tailored SEO plans designed specifically for your industry, competition, and business goals.',
              },
              {
                title: 'Ongoing Optimization',
                description: 'Continuous monitoring and refinement to adapt to algorithm updates and market changes.',
              },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">SEO Packages & Pricing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Flexible packages designed for businesses of all sizes
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our SEO services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Dominate Search Rankings?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Get a free SEO audit and discover how we can help your business achieve 
            top rankings and sustainable organic growth.
          </p>
          <CtaButton variant="secondary" size="lg">
            Get Your Free SEO Audit Now
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
