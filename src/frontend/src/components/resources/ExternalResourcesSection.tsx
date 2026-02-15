import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { externalResources } from '../../data/externalResources';

export default function ExternalResourcesSection() {
  const tools = externalResources.filter((r) => r.category === 'tool');
  const portfolios = externalResources.filter((r) => r.category === 'portfolio');

  return (
    <section className="space-y-8">
      <div>
        <h2 className="mb-2 text-3xl font-bold">Free SEO Tools</h2>
        <p className="text-muted-foreground">
          Access our suite of professional SEO and content tools
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {resource.title}
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 text-2xl font-semibold">Our Portfolio</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    {resource.title}
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
