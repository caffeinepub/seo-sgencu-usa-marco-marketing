import { Button } from '@/components/ui/button';
import { type ComponentPropsWithoutRef } from 'react';

type CtaButtonProps = ComponentPropsWithoutRef<typeof Button>;

export default function CtaButton({ children, className = '', ...props }: CtaButtonProps) {
  return (
    <Button
      size="lg"
      className={`font-semibold ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
