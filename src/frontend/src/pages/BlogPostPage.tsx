import { useParams, useNavigate } from '@tanstack/react-router';
import { Calendar, Tag, Edit, Trash2 } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { createCombinedSchema, createOrganizationSchema, createBlogPostingSchema } from '../lib/structuredData';
import { useGetAllPosts, useDeletePost } from '../hooks/useBlog';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Markdown } from '../lib/markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export default function BlogPostPage() {
  const { slug } = useParams({ from: '/blog/$slug' });
  const navigate = useNavigate();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const { data: posts = [] } = useGetAllPosts();
  const { identity } = useInternetIdentity();
  const deletePost = useDeletePost();

  const post = posts.find((p) => p.slug === slug);

  const isAuthor = post && identity 
    ? post.author.toString() === identity.getPrincipal().toString()
    : false;

  // Enforce title length for SEO (<60 chars)
  const seoTitle = post 
    ? (post.title.length > 45 ? `${post.title.substring(0, 42)}...` : post.title) + ' - Marco Marketing'
    : 'Blog Post - Marco Marketing';

  useSEO({
    title: seoTitle,
    description: post?.excerpt || 'Read our latest insights on SEO and digital marketing',
    canonical: `${origin}/blog/${slug}`,
    jsonLd: post 
      ? createCombinedSchema(createOrganizationSchema(), createBlogPostingSchema(post))
      : createCombinedSchema(createOrganizationSchema()),
  });

  const handleDelete = async () => {
    if (!post || !confirm('Are you sure you want to delete this post?')) return;

    try {
      await deletePost.mutateAsync(post.id);
      toast.success('Post deleted successfully');
      navigate({ to: '/blog' });
    } catch (error) {
      toast.error('Failed to delete post');
      console.error(error);
    }
  };

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Post Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate({ to: '/blog' })}>
          Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <article className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(Number(post.createdAt) / 1000000).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              {post.authorDisplayName && (
                <span>By {post.authorDisplayName}</span>
              )}
            </div>
            {post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {isAuthor && (
              <div className="mb-8 flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate({ to: `/blog/editor/${post.id}` })}
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDelete}
                  disabled={deletePost.isPending}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  {deletePost.isPending ? 'Deleting...' : 'Delete'}
                </Button>
              </div>
            )}

            <div className="prose prose-slate max-w-none dark:prose-invert">
              <Markdown content={post.content} />
            </div>

            <Separator className="my-12" />

            <div className="text-center">
              <Button variant="outline" onClick={() => navigate({ to: '/blog' })}>
                Back to Blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
