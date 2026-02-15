import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Principal = Principal;
export interface BlogPost {
    id: bigint;
    title: string;
    content: string;
    createdAt: Time;
    slug: string;
    tags: Array<string>;
    author: Principal;
    updatedAt: Time;
    excerpt: string;
    authorDisplayName?: string;
}
export type Time = bigint;
export interface UserProfile {
    bio: string;
    displayName: string;
    website: string;
    company: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    createPost(title: string, slug: string, excerpt: string, content: string, tags: Array<string>, authorDisplayName: string | null): Promise<bigint>;
    deletePost(postId: bigint): Promise<void>;
    getAllPosts(): Promise<Array<BlogPost>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getPostById(postId: bigint): Promise<BlogPost | null>;
    getPostsByTag(tag: string): Promise<Array<BlogPost>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    updatePost(postId: bigint, title: string, slug: string, excerpt: string, content: string, tags: Array<string>, authorDisplayName: string | null): Promise<void>;
}
