import { useState, useEffect } from 'react';
import { useParams, useNavigate } from '@tanstack/react-router';
import { useSEO } from '../lib/seo';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetAllPosts, useCreatePost, useUpdatePost } from '../hooks/useBlog';
import { useGetCallerUserProfile } from '../hooks/useCurrentUserProfile';
import { generateSlug, validateSlug } from '../lib/slug';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

export default function BlogEditorPage() {
  const params = useParams({ strict: false });
  const postId = params.postId ? BigInt(params.postId) : null;
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: posts = [] } = useGetAllPosts();
  const { data: userProfile } = useGetCallerUserProfile();
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  const existingPost = postId ? posts.find((p) => p.id === postId) : null;

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useSEO({
    title: existingPost ? 'Edit Post - Marco Marketing' : 'Create Post - Marco Marketing',
    description: 'Blog post editor for Marco Marketing',
    noindex: true,
  });

  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setSlug(existingPost.slug);
      setExcerpt(existingPost.excerpt);
      setContent(existingPost.content);
      setTags(existingPost.tags.join(', '));
    }
  }, [existingPost]);

  useEffect(() => {
    if (!existingPost && title && !slug) {
      setSlug(generateSlug(title));
    }
  }, [title, slug, existingPost]);

  if (!identity) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-3xl font-bold">Authentication Required</h1>
        <p className="mb-8 text-muted-foreground">
          Please log in to create or edit blog posts.
        </p>
        <Button onClick={() => navigate({ to: '/blog' })}>
          Back to Blog
        </Button>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateSlug(slug)) {
      toast.error('Invalid slug format. Use lowercase letters, numbers, and hyphens only.');
      return;
    }

    const tagArray = tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const authorDisplayName = userProfile?.displayName || null;

    try {
      if (existingPost) {
        await updatePost.mutateAsync({
          postId: existingPost.id,
          title,
          slug,
          excerpt,
          content,
          tags: tagArray,
          authorDisplayName,
        });
        toast.success('Post updated successfully');
      } else {
        const newPostId = await createPost.mutateAsync({
          title,
          slug,
          excerpt,
          content,
          tags: tagArray,
          authorDisplayName,
        });
        toast.success('Post created successfully');
      }
      navigate({ to: `/blog/${slug}` });
    } catch (error: any) {
      toast.error(error.message || 'Failed to save post');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1>{existingPost ? 'Edit Post' : 'Create New Post'}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="post-url-slug"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Use lowercase letters, numbers, and hyphens only
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary of the post"
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your post content using Markdown..."
                  rows={15}
                  required
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  Supports Markdown: **bold**, *italic*, # headers, [links](url), * lists
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="SEO, Digital Marketing, Content Strategy"
                />
                <p className="text-xs text-muted-foreground">
                  Separate tags with commas
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={createPost.isPending || updatePost.isPending}
                >
                  {createPost.isPending || updatePost.isPending
                    ? 'Saving...'
                    : existingPost
                    ? 'Update Post'
                    : 'Create Post'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate({ to: '/blog' })}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
