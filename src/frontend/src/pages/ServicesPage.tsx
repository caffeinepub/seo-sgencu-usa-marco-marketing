import { useNavigate } from '@tanstack/react-router';
import { useSEO } from '../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createWebSiteSchema } from '../lib/structuredData';
import CtaButton from '../components/CtaButton';
import ServiceCards from '../components/services/ServiceCards';
import PricingTable from '../components/services/PricingTable';
import ExternalResourcesSection from '../components/resources/ExternalResourcesSection';
import { services } from '../data/services';

export default function ServicesPage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useSEO({
    title: 'Digital Marketing Services - Marco Marketing USA',
    description: 'Comprehensive digital marketing services including SEO, PPC, content marketing, branding, and web design. Serving businesses across the USA.',
    canonical: `${origin}/services`,
    jsonLd: createCombinedSchema(createOrganizationSchema(), createWebSiteSchema()),
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional Digital Marketing Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Marco Marketing offers a complete suite of digital marketing and creative services 
            designed to help businesses across the USA achieve sustainable growth and success.
          </p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              From <a href="/services/seo" className="font-medium text-primary hover:underline">SEO services</a> to 
              creative design, we provide everything your business needs to thrive online.
            </p>
          </div>
          <ServiceCards services={services} />
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">SEO & PPC Packages</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose the perfect package for your business needs
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ExternalResourcesSection />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Let's Grow Your Business Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Contact us today for a free consultation and discover how our services can 
            transform your online presence.
          </p>
          <CtaButton
            variant="secondary"
            onClick={() => navigate({ to: '/services/seo' })}
          >
            Get Started Today
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
