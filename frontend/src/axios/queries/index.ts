// generated with @7nohe/openapi-react-query-codegen@0.5.3 
import { useQuery, useMutation, UseQueryResult, UseQueryOptions, UseMutationOptions, UseMutationResult } from "@tanstack/react-query";
import { Tag3713229237View } from "../requests/models/Tag3713229237View";
import { Tag1648032904View } from "../requests/models/Tag1648032904View";
import { Profile442089671View } from "../requests/models/Profile442089671View";
import { Profile2485805610View } from "../requests/models/Profile2485805610View";
import { Post3402657615View } from "../requests/models/Post3402657615View";
import { Post14154960View } from "../requests/models/Post14154960View";
import { Auth4091576228View } from "../requests/models/Auth4091576228View";
import { TagService } from "../requests/services/TagService";
import { ProfileService } from "../requests/services/ProfileService";
import { PostService } from "../requests/services/PostService";
import { AuthService } from "../requests/services/AuthService";
export type TagServiceListTagDefaultResponse = Awaited<ReturnType<typeof TagService.listTag>>;
export type TagServiceListTagQueryResult<TData = TagServiceListTagDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTagServiceListTagKey = "TagServiceListTag";
/**
 * List Tags
 * List Tags.
 */
export const useTagServiceListTag = <TData = TagServiceListTagDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, itemsPerPage }: {
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useTagServiceListTagKey, ...(queryKey ?? [{ page, itemsPerPage }])], queryFn: () => TagService.listTag(page, itemsPerPage) as TData, ...options });
export type TagServiceCreateTagMutationResult = Awaited<ReturnType<typeof TagService.createTag>>;
/**
 * Create a new Tag
 * Creates a new Tag and persists it to storage.
 */
export const useTagServiceCreateTag = <TData = TagServiceCreateTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody?: {
        name: string;
        posts?: Array<string>;
        type: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody?: {
        name: string;
        posts?: Array<string>;
        type: string;
    };
}, TContext>({ mutationFn: ({ requestBody }) => TagService.createTag(requestBody) as unknown as Promise<TData>, ...options });
export type TagServiceReadTagDefaultResponse = Awaited<ReturnType<typeof TagService.readTag>>;
export type TagServiceReadTagQueryResult<TData = TagServiceReadTagDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTagServiceReadTagKey = "TagServiceReadTag";
/**
 * Find a Tag by ID
 * Finds the Tag with the requested ID and returns it.
 */
export const useTagServiceReadTag = <TData = TagServiceReadTagDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useTagServiceReadTagKey, ...(queryKey ?? [{ id }])], queryFn: () => TagService.readTag(id) as TData, ...options });
export type TagServiceDeleteTagMutationResult = Awaited<ReturnType<typeof TagService.deleteTag>>;
/**
 * Deletes a Tag by ID
 * Deletes the Tag with the requested ID.
 */
export const useTagServiceDeleteTag = <TData = TagServiceDeleteTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => TagService.deleteTag(id) as unknown as Promise<TData>, ...options });
export type TagServiceUpdateTagMutationResult = Awaited<ReturnType<typeof TagService.updateTag>>;
/**
 * Updates a Tag
 * Updates a Tag and persists changes to storage.
 */
export const useTagServiceUpdateTag = <TData = TagServiceUpdateTagMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    requestBody?: {
        name: string;
        posts?: Array<string>;
        type: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    requestBody?: {
        name: string;
        posts?: Array<string>;
        type: string;
    };
}, TContext>({ mutationFn: ({ id, requestBody }) => TagService.updateTag(id, requestBody) as unknown as Promise<TData>, ...options });
export type TagServiceListTagPostsDefaultResponse = Awaited<ReturnType<typeof TagService.listTagPosts>>;
export type TagServiceListTagPostsQueryResult<TData = TagServiceListTagPostsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTagServiceListTagPostsKey = "TagServiceListTagPosts";
/**
 * Find the attached Posts
 * Find the attached Posts of the Tag with the given ID
 */
export const useTagServiceListTagPosts = <TData = TagServiceListTagPostsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, page, itemsPerPage }: {
    id: number;
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useTagServiceListTagPostsKey, ...(queryKey ?? [{ id, page, itemsPerPage }])], queryFn: () => TagService.listTagPosts(id, page, itemsPerPage) as TData, ...options });
export type ProfileServiceListProfileDefaultResponse = Awaited<ReturnType<typeof ProfileService.listProfile>>;
export type ProfileServiceListProfileQueryResult<TData = ProfileServiceListProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProfileServiceListProfileKey = "ProfileServiceListProfile";
/**
 * List Profiles
 * List Profiles.
 */
export const useProfileServiceListProfile = <TData = ProfileServiceListProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, itemsPerPage }: {
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useProfileServiceListProfileKey, ...(queryKey ?? [{ page, itemsPerPage }])], queryFn: () => ProfileService.listProfile(page, itemsPerPage) as TData, ...options });
export type ProfileServiceCreateProfileMutationResult = Awaited<ReturnType<typeof ProfileService.createProfile>>;
/**
 * Create a new Profile
 * Creates a new Profile and persists it to storage.
 */
export const useProfileServiceCreateProfile = <TData = ProfileServiceCreateProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody?: {
        auth?: Array<string>;
        auth_link: string;
        created_at: string;
        description: string;
        logo: string;
        name: string;
        posts?: Array<string>;
        type: string;
        updated_at?: string;
        website: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody?: {
        auth?: Array<string>;
        auth_link: string;
        created_at: string;
        description: string;
        logo: string;
        name: string;
        posts?: Array<string>;
        type: string;
        updated_at?: string;
        website: string;
    };
}, TContext>({ mutationFn: ({ requestBody }) => ProfileService.createProfile(requestBody) as unknown as Promise<TData>, ...options });
export type ProfileServiceReadProfileDefaultResponse = Awaited<ReturnType<typeof ProfileService.readProfile>>;
export type ProfileServiceReadProfileQueryResult<TData = ProfileServiceReadProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProfileServiceReadProfileKey = "ProfileServiceReadProfile";
/**
 * Find a Profile by ID
 * Finds the Profile with the requested ID and returns it.
 */
export const useProfileServiceReadProfile = <TData = ProfileServiceReadProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useProfileServiceReadProfileKey, ...(queryKey ?? [{ id }])], queryFn: () => ProfileService.readProfile(id) as TData, ...options });
export type ProfileServiceDeleteProfileMutationResult = Awaited<ReturnType<typeof ProfileService.deleteProfile>>;
/**
 * Deletes a Profile by ID
 * Deletes the Profile with the requested ID.
 */
export const useProfileServiceDeleteProfile = <TData = ProfileServiceDeleteProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
}, TContext>({ mutationFn: ({ id }) => ProfileService.deleteProfile(id) as unknown as Promise<TData>, ...options });
export type ProfileServiceUpdateProfileMutationResult = Awaited<ReturnType<typeof ProfileService.updateProfile>>;
/**
 * Updates a Profile
 * Updates a Profile and persists changes to storage.
 */
export const useProfileServiceUpdateProfile = <TData = ProfileServiceUpdateProfileMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: number;
    requestBody?: {
        auth?: Array<string>;
        auth_link: string;
        created_at: string;
        description: string;
        logo: string;
        name: string;
        posts?: Array<string>;
        type: string;
        updated_at?: string;
        website: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: number;
    requestBody?: {
        auth?: Array<string>;
        auth_link: string;
        created_at: string;
        description: string;
        logo: string;
        name: string;
        posts?: Array<string>;
        type: string;
        updated_at?: string;
        website: string;
    };
}, TContext>({ mutationFn: ({ id, requestBody }) => ProfileService.updateProfile(id, requestBody) as unknown as Promise<TData>, ...options });
export type ProfileServiceListProfileAuthDefaultResponse = Awaited<ReturnType<typeof ProfileService.listProfileAuth>>;
export type ProfileServiceListProfileAuthQueryResult<TData = ProfileServiceListProfileAuthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProfileServiceListProfileAuthKey = "ProfileServiceListProfileAuth";
/**
 * Find the attached Auths
 * Find the attached Auths of the Profile with the given ID
 */
export const useProfileServiceListProfileAuth = <TData = ProfileServiceListProfileAuthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, page, itemsPerPage }: {
    id: number;
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useProfileServiceListProfileAuthKey, ...(queryKey ?? [{ id, page, itemsPerPage }])], queryFn: () => ProfileService.listProfileAuth(id, page, itemsPerPage) as TData, ...options });
export type ProfileServiceListProfilePostsDefaultResponse = Awaited<ReturnType<typeof ProfileService.listProfilePosts>>;
export type ProfileServiceListProfilePostsQueryResult<TData = ProfileServiceListProfilePostsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useProfileServiceListProfilePostsKey = "ProfileServiceListProfilePosts";
/**
 * Find the attached Posts
 * Find the attached Posts of the Profile with the given ID
 */
export const useProfileServiceListProfilePosts = <TData = ProfileServiceListProfilePostsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, page, itemsPerPage }: {
    id: number;
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useProfileServiceListProfilePostsKey, ...(queryKey ?? [{ id, page, itemsPerPage }])], queryFn: () => ProfileService.listProfilePosts(id, page, itemsPerPage) as TData, ...options });
export type PostServiceListPostDefaultResponse = Awaited<ReturnType<typeof PostService.listPost>>;
export type PostServiceListPostQueryResult<TData = PostServiceListPostDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePostServiceListPostKey = "PostServiceListPost";
/**
 * List Posts
 * List Posts.
 */
export const usePostServiceListPost = <TData = PostServiceListPostDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, itemsPerPage }: {
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePostServiceListPostKey, ...(queryKey ?? [{ page, itemsPerPage }])], queryFn: () => PostService.listPost(page, itemsPerPage) as TData, ...options });
export type PostServiceCreatePostMutationResult = Awaited<ReturnType<typeof PostService.createPost>>;
/**
 * Create a new Post
 * Creates a new Post and persists it to storage.
 */
export const usePostServiceCreatePost = <TData = PostServiceCreatePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody?: {
        apply_url: string;
        author?: number;
        content: string;
        created_at: string;
        created_by: string;
        estimate_salary?: number;
        latitude?: number;
        longitude?: number;
        status: string;
        subHead?: string;
        tags?: Array<number>;
        title: string;
        updated_at?: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody?: {
        apply_url: string;
        author?: number;
        content: string;
        created_at: string;
        created_by: string;
        estimate_salary?: number;
        latitude?: number;
        longitude?: number;
        status: string;
        subHead?: string;
        tags?: Array<number>;
        title: string;
        updated_at?: string;
    };
}, TContext>({ mutationFn: ({ requestBody }) => PostService.createPost(requestBody) as unknown as Promise<TData>, ...options });
export type PostServiceReadPostDefaultResponse = Awaited<ReturnType<typeof PostService.readPost>>;
export type PostServiceReadPostQueryResult<TData = PostServiceReadPostDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePostServiceReadPostKey = "PostServiceReadPost";
/**
 * Find a Post by ID
 * Finds the Post with the requested ID and returns it.
 */
export const usePostServiceReadPost = <TData = PostServiceReadPostDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePostServiceReadPostKey, ...(queryKey ?? [{ id }])], queryFn: () => PostService.readPost(id) as TData, ...options });
export type PostServiceDeletePostMutationResult = Awaited<ReturnType<typeof PostService.deletePost>>;
/**
 * Deletes a Post by ID
 * Deletes the Post with the requested ID.
 */
export const usePostServiceDeletePost = <TData = PostServiceDeletePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => PostService.deletePost(id) as unknown as Promise<TData>, ...options });
export type PostServiceUpdatePostMutationResult = Awaited<ReturnType<typeof PostService.updatePost>>;
/**
 * Updates a Post
 * Updates a Post and persists changes to storage.
 */
export const usePostServiceUpdatePost = <TData = PostServiceUpdatePostMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    requestBody?: {
        apply_url: string;
        author?: number;
        content: string;
        created_at: string;
        created_by: string;
        estimate_salary?: number;
        latitude?: number;
        longitude?: number;
        status: string;
        subHead?: string;
        tags?: Array<number>;
        title: string;
        updated_at?: string;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    requestBody?: {
        apply_url: string;
        author?: number;
        content: string;
        created_at: string;
        created_by: string;
        estimate_salary?: number;
        latitude?: number;
        longitude?: number;
        status: string;
        subHead?: string;
        tags?: Array<number>;
        title: string;
        updated_at?: string;
    };
}, TContext>({ mutationFn: ({ id, requestBody }) => PostService.updatePost(id, requestBody) as unknown as Promise<TData>, ...options });
export type PostServiceReadPostAuthorDefaultResponse = Awaited<ReturnType<typeof PostService.readPostAuthor>>;
export type PostServiceReadPostAuthorQueryResult<TData = PostServiceReadPostAuthorDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePostServiceReadPostAuthorKey = "PostServiceReadPostAuthor";
/**
 * Find the attached Profile
 * Find the attached Profile of the Post with the given ID
 */
export const usePostServiceReadPostAuthor = <TData = PostServiceReadPostAuthorDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePostServiceReadPostAuthorKey, ...(queryKey ?? [{ id }])], queryFn: () => PostService.readPostAuthor(id) as TData, ...options });
export type PostServiceListPostTagsDefaultResponse = Awaited<ReturnType<typeof PostService.listPostTags>>;
export type PostServiceListPostTagsQueryResult<TData = PostServiceListPostTagsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePostServiceListPostTagsKey = "PostServiceListPostTags";
/**
 * Find the attached Tags
 * Find the attached Tags of the Post with the given ID
 */
export const usePostServiceListPostTags = <TData = PostServiceListPostTagsDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id, page, itemsPerPage }: {
    id: string;
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [usePostServiceListPostTagsKey, ...(queryKey ?? [{ id, page, itemsPerPage }])], queryFn: () => PostService.listPostTags(id, page, itemsPerPage) as TData, ...options });
export type AuthServiceListAuthDefaultResponse = Awaited<ReturnType<typeof AuthService.listAuth>>;
export type AuthServiceListAuthQueryResult<TData = AuthServiceListAuthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceListAuthKey = "AuthServiceListAuth";
/**
 * List Auths
 * List Auths.
 */
export const useAuthServiceListAuth = <TData = AuthServiceListAuthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ page, itemsPerPage }: {
    page?: number;
    itemsPerPage?: number;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useAuthServiceListAuthKey, ...(queryKey ?? [{ page, itemsPerPage }])], queryFn: () => AuthService.listAuth(page, itemsPerPage) as TData, ...options });
export type AuthServiceCreateAuthMutationResult = Awaited<ReturnType<typeof AuthService.createAuth>>;
/**
 * Create a new Auth
 * Creates a new Auth and persists it to storage.
 */
export const useAuthServiceCreateAuth = <TData = AuthServiceCreateAuthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    requestBody?: {
        email: string;
        password_hash: string;
        profile: number;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    requestBody?: {
        email: string;
        password_hash: string;
        profile: number;
    };
}, TContext>({ mutationFn: ({ requestBody }) => AuthService.createAuth(requestBody) as unknown as Promise<TData>, ...options });
export type AuthServiceReadAuthDefaultResponse = Awaited<ReturnType<typeof AuthService.readAuth>>;
export type AuthServiceReadAuthQueryResult<TData = AuthServiceReadAuthDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceReadAuthKey = "AuthServiceReadAuth";
/**
 * Find a Auth by ID
 * Finds the Auth with the requested ID and returns it.
 */
export const useAuthServiceReadAuth = <TData = AuthServiceReadAuthDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useAuthServiceReadAuthKey, ...(queryKey ?? [{ id }])], queryFn: () => AuthService.readAuth(id) as TData, ...options });
export type AuthServiceDeleteAuthMutationResult = Awaited<ReturnType<typeof AuthService.deleteAuth>>;
/**
 * Deletes a Auth by ID
 * Deletes the Auth with the requested ID.
 */
export const useAuthServiceDeleteAuth = <TData = AuthServiceDeleteAuthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
}, TContext>({ mutationFn: ({ id }) => AuthService.deleteAuth(id) as unknown as Promise<TData>, ...options });
export type AuthServiceUpdateAuthMutationResult = Awaited<ReturnType<typeof AuthService.updateAuth>>;
/**
 * Updates a Auth
 * Updates a Auth and persists changes to storage.
 */
export const useAuthServiceUpdateAuth = <TData = AuthServiceUpdateAuthMutationResult, TError = unknown, TContext = unknown>(options?: Omit<UseMutationOptions<TData, TError, {
    id: string;
    requestBody?: {
        email: string;
        password_hash: string;
        profile: number;
    };
}, TContext>, "mutationFn">) => useMutation<TData, TError, {
    id: string;
    requestBody?: {
        email: string;
        password_hash: string;
        profile: number;
    };
}, TContext>({ mutationFn: ({ id, requestBody }) => AuthService.updateAuth(id, requestBody) as unknown as Promise<TData>, ...options });
export type AuthServiceReadAuthProfileDefaultResponse = Awaited<ReturnType<typeof AuthService.readAuthProfile>>;
export type AuthServiceReadAuthProfileQueryResult<TData = AuthServiceReadAuthProfileDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useAuthServiceReadAuthProfileKey = "AuthServiceReadAuthProfile";
/**
 * Find the attached Profile
 * Find the attached Profile of the Auth with the given ID
 */
export const useAuthServiceReadAuthProfile = <TData = AuthServiceReadAuthProfileDefaultResponse, TError = unknown, TQueryKey extends Array<unknown> = unknown[]>({ id }: {
    id: string;
}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn" | "initialData">) => useQuery<TData, TError>({ queryKey: [useAuthServiceReadAuthProfileKey, ...(queryKey ?? [{ id }])], queryFn: () => AuthService.readAuthProfile(id) as TData, ...options });
