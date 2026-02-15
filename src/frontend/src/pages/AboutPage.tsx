import { useNavigate } from '@tanstack/react-router';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createWebSiteSchema } from '../lib/structuredData';
import CtaButton from '../components/CtaButton';

export default function AboutPage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useSEO({
    title: 'About Marco Marketing - SEO Agency USA',
    description: 'Learn about Marco Marketing, a trusted SEO and digital marketing agency serving businesses across the USA with premium-quality services and proven results.',
    canonical: `${origin}/about`,
    jsonLd: createCombinedSchema(createOrganizationSchema(), createWebSiteSchema()),
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              About Marco Marketing
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Your trusted partner for SEO and digital marketing excellence across the USA
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-lg">
            <p>
              Marco Marketing is recognized as a versatile brand that fosters business growth 
              and success through comprehensive digital marketing solutions. We specialize in 
              helping businesses across the United States achieve their online marketing goals 
              with data-driven strategies and creative excellence.
            </p>
            <p>
              Our mission is to empower businesses of all sizes—from startups to established 
              enterprises—with premium-quality SEO services, digital marketing strategies, and 
              creative solutions that drive measurable results. We believe in delivering 
              exceptional value through affordable pricing without compromising on quality.
            </p>
            <p>
              With a deep understanding of the USA market and years of experience in search 
              engine optimization, content marketing, branding, and web design, we've helped 
              hundreds of businesses achieve top rankings, increase organic traffic, and grow 
              their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: 'Results-Driven',
                description: 'We focus on delivering measurable outcomes that impact your bottom line.',
              },
              {
                icon: Users,
                title: 'Client-Centric',
                description: 'Your success is our success. We prioritize your goals and satisfaction.',
              },
              {
                icon: Award,
                title: 'Quality First',
                description: 'Premium services and attention to detail in every project we undertake.',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Staying ahead of trends to provide cutting-edge marketing solutions.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What We Do</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive digital marketing services for USA businesses
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-6 text-lg">
            <p>
              At Marco Marketing, we offer a full spectrum of digital marketing and creative 
              services designed to help your business thrive in the competitive online landscape:
            </p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>SEO Services:</strong> Comprehensive search engine optimization to 
                  improve rankings and drive organic traffic
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>PPC Advertising:</strong> Strategic paid campaigns that maximize ROI 
                  and reach your target audience
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Content Marketing:</strong> Engaging content that attracts, educates, 
                  and converts your ideal customers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Branding & Design:</strong> Logo design, brand identity, and creative 
                  solutions that make you stand out
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  <strong>Web Development:</strong> Modern, responsive websites optimized for 
                  performance and conversions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Let's Work Together</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Ready to take your business to the next level? Contact us today for a free 
            consultation and discover how we can help you achieve your goals.
          </p>
          <CtaButton
            variant="secondary"
            size="lg"
            onClick={() => navigate({ to: '/services/seo' })}
          >
            Get Your Free SEO Audit
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
