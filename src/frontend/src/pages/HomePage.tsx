import { useNavigate } from '@tanstack/react-router';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createWebSiteSchema } from '../lib/structuredData';
import CtaButton from '../components/CtaButton';
import ServiceCards from '../components/services/ServiceCards';
import ExternalResourcesSection from '../components/resources/ExternalResourcesSection';
import { services } from '../data/services';

export default function HomePage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useSEO({
    title: 'SEO Agency USA - Marco Marketing | Expert SEO Services',
    description: 'Leading SEO Agency in the USA. Marco Marketing delivers premium SEO services, digital marketing, and branding solutions for businesses across America.',
    canonical: origin,
    jsonLd: createCombinedSchema(createOrganizationSchema(), createWebSiteSchema()),
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Premier SEO Agency in the USA
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Marco Marketing is your trusted SEO Agency partner across the USA. We deliver 
                data-driven SEO strategies, comprehensive digital marketing, and creative solutions 
                that drive measurable growth for startups and established businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaButton onClick={() => navigate({ to: '/services/seo' })}>
                  Get Free SEO Audit <ArrowRight className="ml-2 h-5 w-5" />
                </CtaButton>
                <CtaButton variant="outline" onClick={() => navigate({ to: '/services' })}>
                  View All Services
                </CtaButton>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/seo-hero-illustration.dim_1600x900.png"
                alt="SEO Agency USA - Professional digital marketing and SEO services"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive digital marketing and creative solutions tailored for USA businesses
            </p>
          </div>
          <ServiceCards services={services.slice(0, 6)} />
          <div className="mt-8 text-center">
            <CtaButton variant="outline" onClick={() => navigate({ to: '/services' })}>
              View All Services
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Marco Marketing</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Your trusted SEO Agency partner in the USA
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'USA-Focused Expertise',
                description: 'Deep understanding of the USA market and local SEO strategies',
              },
              {
                title: 'Premium Quality',
                description: 'High-quality services without compromising on standards',
              },
              {
                title: 'Affordable Solutions',
                description: 'Competitive pricing for startups and established businesses',
              },
              {
                title: 'Proven Results',
                description: 'Data-driven strategies that deliver measurable growth',
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

      {/* Resources & Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ExternalResourcesSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Get a free SEO audit and discover how Marco Marketing can help your business 
            dominate search rankings across the USA.
          </p>
          <CtaButton
            variant="secondary"
            onClick={() => navigate({ to: '/services/seo' })}
          >
            Get Your Free SEO Audit
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
