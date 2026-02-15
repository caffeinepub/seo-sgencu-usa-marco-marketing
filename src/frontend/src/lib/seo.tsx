import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
  noindex?: boolean;
}

export function useSEO({ title, description, canonical, ogImage, jsonLd, noindex = false }: SEOProps) {
  useEffect(() => {
    // Enforce title length constraint (<60 chars)
    const finalTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
    document.title = finalTitle;

    // Enforce description length constraint (<160 chars)
    const finalDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

    // Helper to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Helper to remove meta tags
    const removeMetaTag = (name: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      const element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.remove();
      }
    };

    // Basic meta tags
    setMetaTag('description', finalDescription);

    // Robots meta tag for noindex pages
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      removeMetaTag('robots');
    }

    // Open Graph tags
    setMetaTag('og:title', finalTitle, true);
    setMetaTag('og:description', finalDescription, true);
    setMetaTag('og:type', 'website', true);
    
    if (canonical) {
      setMetaTag('og:url', canonical, true);
    } else {
      removeMetaTag('og:url', true);
    }

    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    } else {
      removeMetaTag('og:image', true);
    }

    // Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDescription);
    
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    } else {
      removeMetaTag('twitter:image');
    }

    // Canonical link
    let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (canonical) {
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.rel = 'canonical';
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    } else if (linkElement) {
      linkElement.remove();
    }

    // JSON-LD structured data
    const scriptId = 'jsonld-script';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Cleanup function to remove tags when component unmounts or deps change
    return () => {
      // We don't remove tags on cleanup to prevent flashing during navigation
      // The next page will overwrite them
    };
  }, [title, description, canonical, ogImage, jsonLd, noindex]);
}
