import { AUTH_USER, AUTH_ERROR } from './auth_types';

export const mutateAuth = (credentials) => ({type: AUTH_USER, credentials});
export const mutateError = (credentials) => ({AUTH_ERROR, credentials});
