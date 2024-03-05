/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post14154960View } from '../models/Post14154960View';
import type { Profile442089671View } from '../models/Profile442089671View';
import type { Tag3713229237View } from '../models/Tag3713229237View';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostService {
    /**
     * List Posts
     * List Posts.
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Post14154960View result Post list
     * @throws ApiError
     */
    public static listPost(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Post14154960View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Create a new Post
     * Creates a new Post and persists it to storage.
     * @param requestBody Post to create
     * @returns Post14154960View Post created
     * @throws ApiError
     */
    public static createPost(
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
        },
    ): CancelablePromise<Post14154960View> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid input, data invalid`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find a Post by ID
     * Finds the Post with the requested ID and returns it.
     * @param id ID of the Post
     * @returns Post14154960View Post with requested ID was found
     * @throws ApiError
     */
    public static readPost(
        id: string,
    ): CancelablePromise<Post14154960View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Deletes a Post by ID
     * Deletes the Post with the requested ID.
     * @param id ID of the Post to delete
     * @returns void
     * @throws ApiError
     */
    public static deletePost(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Updates a Post
     * Updates a Post and persists changes to storage.
     * @param id ID of the Post to update
     * @param requestBody Post properties to update
     * @returns Post14154960View Post updated
     * @throws ApiError
     */
    public static updatePost(
        id: string,
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
        },
    ): CancelablePromise<Post14154960View> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find the attached Profile
     * Find the attached Profile of the Post with the given ID
     * @param id ID of the Post
     * @returns Profile442089671View Profile attached to Post with requested ID was found
     * @throws ApiError
     */
    public static readPostAuthor(
        id: string,
    ): CancelablePromise<Profile442089671View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}/author',
            path: {
                'id': id,
            },
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find the attached Tags
     * Find the attached Tags of the Post with the given ID
     * @param id ID of the Post
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Tag3713229237View Tags attached to Post with requested ID was found
     * @throws ApiError
     */
    public static listPostTags(
        id: string,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Tag3713229237View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}/tags',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
            errors: {
                400: `invalid input, data invalid`,
                404: `resource not found`,
                500: `unexpected error`,
            },
        });
    }
}
