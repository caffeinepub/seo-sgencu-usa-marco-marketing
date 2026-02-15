import { useNavigate } from '@tanstack/react-router';
import { CheckCircle2, Palette, Zap, Award } from 'lucide-react';
import { useSEO } from '../../lib/seo';
import { createCombinedSchema, createOrganizationSchema } from '../../lib/structuredData';
import CtaButton from '../../components/CtaButton';

export default function LogoDesignServicesPage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useSEO({
    title: 'Logo Design Services USA - Marco Marketing',
    description: 'Professional Logo Design Services in the USA. Marco Marketing creates memorable, impactful logos that elevate your brand identity and resonate with your audience.',
    canonical: `${origin}/services/logo-design`,
    jsonLd: createCombinedSchema(createOrganizationSchema()),
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Logo Design Services in the USA
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Marco Marketing delivers professional Logo Design Services across the USA. 
              We create memorable, impactful logos that capture your brand essence and 
              resonate with your target audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CtaButton size="lg">
                Get Your Custom Logo
              </CtaButton>
              <CtaButton variant="outline" size="lg" onClick={() => navigate({ to: '/services' })}>
                View All Services
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Logo Design Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A proven approach to creating logos that stand out
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Palette,
                title: 'Discovery',
                description: 'We learn about your brand, values, target audience, and design preferences.',
              },
              {
                icon: Zap,
                title: 'Concept Creation',
                description: 'Our designers create multiple unique logo concepts tailored to your brand.',
              },
              {
                icon: Award,
                title: 'Refinement',
                description: 'We refine your chosen concept based on your feedback until it\'s perfect.',
              },
              {
                icon: CheckCircle2,
                title: 'Delivery',
                description: 'Receive your final logo in all formats ready for any application.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What's Included</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need for a complete brand identity
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Multiple initial concepts',
                'Unlimited revisions',
                'Vector files (AI, EPS, SVG)',
                'High-resolution PNG & JPG',
                'Color and black & white versions',
                'Social media profile versions',
                'Favicon for website',
                'Brand style guide',
                'Full commercial rights',
                'Fast turnaround time',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Our Logo Design Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Professional design expertise for USA businesses
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'USA Market Focus',
                description: 'Designs that resonate with American audiences and reflect USA business culture.',
              },
              {
                title: 'Experienced Designers',
                description: 'Talented designers with years of experience creating memorable brand identities.',
              },
              {
                title: 'Unique & Original',
                description: 'Every logo is custom-designed from scratch, never using templates or stock graphics.',
              },
              {
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality or creativity.',
              },
              {
                title: 'Affordable Pricing',
                description: 'Premium logo design services at competitive rates for startups and established businesses.',
              },
              {
                title: 'Full Ownership',
                description: 'You receive complete commercial rights to your logo with no restrictions.',
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

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Create Your Perfect Logo?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Let's design a logo that captures your brand essence and makes a lasting 
            impression on your customers across the USA.
          </p>
          <CtaButton variant="secondary" size="lg">
            Start Your Logo Project Today
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
