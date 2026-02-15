# Specification

## Summary
**Goal:** Use the uploaded logo exactly as-is across the site (including favicon) and enforce best-practice on-page + technical SEO across all existing pages.

**Planned changes:**
- Make the uploaded logo the single source of truth for header and footer branding (no CSS filters, recolors, alternate logo marks, or inconsistent crops).
- Update favicon and app icon links in `frontend/index.html` to reference the converted favicon assets derived from the uploaded logo and ensure they load correctly.
- Enforce strict on-page SEO on all pages/routes: unique meta title/description per page with required length/keyword rules; exactly one H1 per page; semantic H2–H6 hierarchy without skipped levels used for styling.
- Add static `/.well-known`-style crawl assets: serve `/robots.txt` and `/sitemap.xml` from the frontend, include all public indexable routes, reference the sitemap from robots.txt, and exclude/disallow non-indexable utility/editor/auth pages as appropriate.
- Harden metadata updates on client-side navigation: ensure canonical, Open Graph, Twitter, and JSON-LD update per route without duplication or stale carryover; keep structured data coverage (Organization/WebSite site-wide, BlogPosting on blog posts, FAQPage on SEO Services).

**User-visible outcome:** The site shows the exact uploaded logo everywhere (including favicon), and every page has consistent, standards-based SEO metadata and headings, plus working `sitemap.xml` and `robots.txt` for indexing.
