/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Auth4091576228View } from '../models/Auth4091576228View';
import type { Post14154960View } from '../models/Post14154960View';
import type { Profile2485805610View } from '../models/Profile2485805610View';
import type { Profile442089671View } from '../models/Profile442089671View';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProfileService {
    /**
     * List Profiles
     * List Profiles.
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Profile2485805610View result Profile list
     * @throws ApiError
     */
    public static listProfile(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Profile2485805610View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profiles',
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
     * Create a new Profile
     * Creates a new Profile and persists it to storage.
     * @param requestBody Profile to create
     * @returns Profile2485805610View Profile created
     * @throws ApiError
     */
    public static createProfile(
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
        },
    ): CancelablePromise<Profile2485805610View> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/profiles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid input, data invalid`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find a Profile by ID
     * Finds the Profile with the requested ID and returns it.
     * @param id ID of the Profile
     * @returns Profile442089671View Profile with requested ID was found
     * @throws ApiError
     */
    public static readProfile(
        id: number,
    ): CancelablePromise<Profile442089671View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profiles/{id}',
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
     * Deletes a Profile by ID
     * Deletes the Profile with the requested ID.
     * @param id ID of the Profile to delete
     * @returns void
     * @throws ApiError
     */
    public static deleteProfile(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/profiles/{id}',
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
     * Updates a Profile
     * Updates a Profile and persists changes to storage.
     * @param id ID of the Profile to update
     * @param requestBody Profile properties to update
     * @returns Profile2485805610View Profile updated
     * @throws ApiError
     */
    public static updateProfile(
        id: number,
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
        },
    ): CancelablePromise<Profile2485805610View> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/profiles/{id}',
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
     * Find the attached Auths
     * Find the attached Auths of the Profile with the given ID
     * @param id ID of the Profile
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Auth4091576228View Auths attached to Profile with requested ID was found
     * @throws ApiError
     */
    public static listProfileAuth(
        id: number,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Auth4091576228View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profiles/{id}/auth',
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
    /**
     * Find the attached Posts
     * Find the attached Posts of the Profile with the given ID
     * @param id ID of the Profile
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Post14154960View Posts attached to Profile with requested ID was found
     * @throws ApiError
     */
    public static listProfilePosts(
        id: number,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Post14154960View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/profiles/{id}/posts',
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
