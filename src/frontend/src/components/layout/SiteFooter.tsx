import { Link } from '@tanstack/react-router';
import { SiLinkedin, SiInstagram } from 'react-icons/si';
import { Mail, Heart } from 'lucide-react';
import BrandLogo from '../brand/BrandLogo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'marco-marketing';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-muted-foreground">
              Professional SEO and digital marketing services for businesses across the USA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/seo" className="text-muted-foreground hover:text-foreground">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/logo-design" className="text-muted-foreground hover:text-foreground">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">
                  PPC Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:marcomarketing.ali786@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail size={16} />
                  marcomarketing.ali786@gmail.com
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a
                  href="https://www.linkedin.com/in/seo-services-usa-ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/seo.services_usa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Instagram"
                >
                  <SiInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Marco Marketing. Built with{' '}
            <Heart size={14} className="fill-red-500 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
