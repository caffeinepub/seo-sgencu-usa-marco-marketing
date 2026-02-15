import { useNavigate } from '@tanstack/react-router';
import { Calendar, Tag, Plus } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createWebSiteSchema } from '../lib/structuredData';
import { useGetAllPosts } from '../hooks/useBlog';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BlogIndexPage() {
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const { data: posts = [], isLoading } = useGetAllPosts();
  const { identity } = useInternetIdentity();

  useSEO({
    title: 'SEO & Marketing Blog - Marco Marketing USA',
    description: 'Expert insights on SEO, digital marketing, and business growth strategies from Marco Marketing. Stay updated with the latest trends and best practices.',
    canonical: `${origin}/blog`,
    jsonLd: createCombinedSchema(createOrganizationSchema(), createWebSiteSchema()),
  });

  const sortedPosts = [...posts].sort((a, b) => Number(b.createdAt - a.createdAt));

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Expert insights on SEO, digital marketing, and business growth
              </p>
            </div>
            {identity && (
              <Button onClick={() => navigate({ to: '/blog/editor/new' })}>
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center text-muted-foreground">Loading posts...</div>
          ) : sortedPosts.length === 0 ? (
            <div className="text-center">
              <p className="mb-4 text-muted-foreground">No blog posts yet.</p>
              {identity && (
                <Button onClick={() => navigate({ to: '/blog/editor/new' })}>
                  Create First Post
                </Button>
              )}
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedPosts.map((post) => (
                <button
                  key={post.id.toString()}
                  onClick={() => navigate({ to: '/blog/$slug', params: { slug: post.slug } })}
                  className="text-left"
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(Number(post.createdAt) / 1000000).toLocaleDateString()}
                        </div>
                      </div>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              <Tag className="mr-1 h-3 w-3" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
