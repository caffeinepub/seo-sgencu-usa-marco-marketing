import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost } from '../backend';

export function useGetAllPosts() {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPosts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPostById(postId: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost | null>({
    queryKey: ['post', postId?.toString()],
    queryFn: async () => {
      if (!actor || !postId) return null;
      return actor.getPostById(postId);
    },
    enabled: !!actor && !isFetching && postId !== null,
  });
}

export function useCreatePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      title: string;
      slug: string;
      excerpt: string;
      content: string;
      tags: string[];
      authorDisplayName: string | null;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createPost(
        data.title,
        data.slug,
        data.excerpt,
        data.content,
        data.tags,
        data.authorDisplayName
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}

export function useUpdatePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      postId: bigint;
      title: string;
      slug: string;
      excerpt: string;
      content: string;
      tags: string[];
      authorDisplayName: string | null;
    }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updatePost(
        data.postId,
        data.title,
        data.slug,
        data.excerpt,
        data.content,
        data.tags,
        data.authorDisplayName
      );
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['post', variables.postId.toString()] });
    },
  });
}

export function useDeletePost() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: bigint) => {
      if (!actor) throw new Error('Actor not available');
      return actor.deletePost(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
