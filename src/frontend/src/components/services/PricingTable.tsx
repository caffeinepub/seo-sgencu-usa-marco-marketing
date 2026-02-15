import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingPackage {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const packages: PricingPackage[] = [
  {
    name: 'Starter SEO',
    description: 'Perfect for small businesses starting their SEO journey',
    features: [
      'Keyword research & analysis',
      'On-page optimization',
      'Technical SEO audit',
      'Monthly performance reports',
      'Up to 10 pages optimized',
    ],
  },
  {
    name: 'Professional SEO',
    description: 'Comprehensive SEO for growing businesses',
    features: [
      'Everything in Starter',
      'Content strategy & creation',
      'Link building campaigns',
      'Competitor analysis',
      'Local SEO optimization',
      'Up to 25 pages optimized',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise SEO',
    description: 'Advanced SEO solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom SEO strategy',
      'Advanced technical SEO',
      'International SEO',
      'Dedicated account manager',
      'Unlimited pages',
    ],
  },
];

export default function PricingTable() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={pkg.highlighted ? 'border-primary shadow-lg' : ''}
          >
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={pkg.highlighted ? 'default' : 'outline'}>
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="rounded-lg border bg-muted/50 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          For detailed pricing and custom packages, view our{' '}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSnRlOQ-aGKHeRw9isuFdJz0wco4gOAJJ0OqgCLq9Uv1oYE0AMMM4Ha3VO6lVPG1D81ZaXfmftOfHis/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            complete pricing guide
          </a>
        </p>
      </div>
    </div>
  );
}
