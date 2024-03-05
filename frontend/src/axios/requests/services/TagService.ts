/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post14154960View } from '../models/Post14154960View';
import type { Tag3713229237View } from '../models/Tag3713229237View';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
    /**
     * List Tags
     * List Tags.
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Tag3713229237View result Tag list
     * @throws ApiError
     */
    public static listTag(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Tag3713229237View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags',
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
     * Create a new Tag
     * Creates a new Tag and persists it to storage.
     * @param requestBody Tag to create
     * @returns Tag3713229237View Tag created
     * @throws ApiError
     */
    public static createTag(
        requestBody?: {
            name: string;
            posts?: Array<string>;
            type: string;
        },
    ): CancelablePromise<Tag3713229237View> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid input, data invalid`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find a Tag by ID
     * Finds the Tag with the requested ID and returns it.
     * @param id ID of the Tag
     * @returns Tag3713229237View Tag with requested ID was found
     * @throws ApiError
     */
    public static readTag(
        id: number,
    ): CancelablePromise<Tag3713229237View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
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
     * Deletes a Tag by ID
     * Deletes the Tag with the requested ID.
     * @param id ID of the Tag to delete
     * @returns void
     * @throws ApiError
     */
    public static deleteTag(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tags/{id}',
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
     * Updates a Tag
     * Updates a Tag and persists changes to storage.
     * @param id ID of the Tag to update
     * @param requestBody Tag properties to update
     * @returns Tag3713229237View Tag updated
     * @throws ApiError
     */
    public static updateTag(
        id: number,
        requestBody?: {
            name: string;
            posts?: Array<string>;
            type: string;
        },
    ): CancelablePromise<Tag3713229237View> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tags/{id}',
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
     * Find the attached Posts
     * Find the attached Posts of the Tag with the given ID
     * @param id ID of the Tag
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Post14154960View Posts attached to Tag with requested ID was found
     * @throws ApiError
     */
    public static listTagPosts(
        id: number,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Post14154960View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}/posts',
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
