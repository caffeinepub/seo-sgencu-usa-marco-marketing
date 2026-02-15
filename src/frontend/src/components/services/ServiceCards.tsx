import { Link } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ServiceIcon from './ServiceIcon';
import type { Service } from '../../data/services';

interface ServiceCardsProps {
  services: Service[];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Card key={service.id} className="flex flex-col">
          <CardHeader>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <ServiceIcon icon={service.icon} className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          {service.link && (
            <CardContent className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link to={service.link}>Learn More</Link>
              </Button>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
