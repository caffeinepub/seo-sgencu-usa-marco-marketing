interface BrandLogoProps {
  variant?: 'header' | 'footer';
}

export default function BrandLogo({ variant = 'header' }: BrandLogoProps) {
  const height = variant === 'header' ? 40 : 32;

  return (
    <div className="flex items-center gap-2">
      <img
        src="/assets/generated/marco-marketing-logo-uploaded.dim_512x512.png"
        alt="Marco Marketing - SEO Agency USA"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain"
      />
    </div>
  );
}
