import { useEffect } from 'react';
import { SEOMetadata } from '@shared/types';

interface SEOHeadProps {
  metadata: SEOMetadata;
  children?: React.ReactNode;
}

export default function SEOHead({ metadata, children }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      let tag = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement;

      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }

      tag.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', metadata.description);
    updateMetaTag('keywords', metadata.keywords.join(', '));
    updateMetaTag('author', metadata.author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:type', metadata.type, true);
    updateMetaTag('og:title', metadata.title, true);
    updateMetaTag('og:description', metadata.description, true);
    updateMetaTag('og:url', metadata.url, true);
    updateMetaTag('og:image', metadata.image, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metadata.title);
    updateMetaTag('twitter:description', metadata.description);
    updateMetaTag('twitter:image', metadata.image);

    // Article-specific tags
    if (metadata.type === 'article') {
      if (metadata.publishedTime) {
        updateMetaTag('article:published_time', metadata.publishedTime, true);
      }
      if (metadata.modifiedTime) {
        updateMetaTag('article:modified_time', metadata.modifiedTime, true);
      }
      if (metadata.tags) {
        updateMetaTag('article:tag', metadata.tags.join(', '), true);
      }
    }

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.url;

    // Scroll to top
    window.scrollTo(0, 0);

    return () => {
      // Cleanup if needed
    };
  }, [metadata]);

  return <>{children}</>;
}
