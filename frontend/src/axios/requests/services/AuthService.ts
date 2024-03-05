/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Auth4091576228View } from '../models/Auth4091576228View';
import type { Profile442089671View } from '../models/Profile442089671View';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * List Auths
     * List Auths.
     * @param page what page to render
     * @param itemsPerPage item count to render per page
     * @returns Auth4091576228View result Auth list
     * @throws ApiError
     */
    public static listAuth(
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<Array<Auth4091576228View>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auths',
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
     * Create a new Auth
     * Creates a new Auth and persists it to storage.
     * @param requestBody Auth to create
     * @returns Auth4091576228View Auth created
     * @throws ApiError
     */
    public static createAuth(
        requestBody?: {
            email: string;
            password_hash: string;
            profile: number;
        },
    ): CancelablePromise<Auth4091576228View> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auths',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `invalid input, data invalid`,
                500: `unexpected error`,
            },
        });
    }
    /**
     * Find a Auth by ID
     * Finds the Auth with the requested ID and returns it.
     * @param id ID of the Auth
     * @returns Auth4091576228View Auth with requested ID was found
     * @throws ApiError
     */
    public static readAuth(
        id: string,
    ): CancelablePromise<Auth4091576228View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auths/{id}',
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
     * Deletes a Auth by ID
     * Deletes the Auth with the requested ID.
     * @param id ID of the Auth to delete
     * @returns void
     * @throws ApiError
     */
    public static deleteAuth(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auths/{id}',
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
     * Updates a Auth
     * Updates a Auth and persists changes to storage.
     * @param id ID of the Auth to update
     * @param requestBody Auth properties to update
     * @returns Auth4091576228View Auth updated
     * @throws ApiError
     */
    public static updateAuth(
        id: string,
        requestBody?: {
            email: string;
            password_hash: string;
            profile: number;
        },
    ): CancelablePromise<Auth4091576228View> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auths/{id}',
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
     * Find the attached Profile of the Auth with the given ID
     * @param id ID of the Auth
     * @returns Profile442089671View Profile attached to Auth with requested ID was found
     * @throws ApiError
     */
    public static readAuthProfile(
        id: string,
    ): CancelablePromise<Profile442089671View> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auths/{id}/profile',
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
}
