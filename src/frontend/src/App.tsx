import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SeoServicesPage from './pages/services/SeoServicesPage';
import LogoDesignServicesPage from './pages/services/LogoDesignServicesPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogEditorPage from './pages/BlogEditorPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import { Toaster } from './components/ui/sonner';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const seoServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/seo',
  component: SeoServicesPage,
});

const logoDesignServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/logo-design',
  component: LogoDesignServicesPage,
});

const blogIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogIndexPage,
});

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/$slug',
  component: BlogPostPage,
});

const blogEditorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/editor/new',
  component: BlogEditorPage,
});

const blogEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog/editor/$postId',
  component: BlogEditorPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  seoServicesRoute,
  logoDesignServicesRoute,
  blogIndexRoute,
  blogPostRoute,
  blogEditorRoute,
  blogEditRoute,
  aboutRoute,
  profileRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
