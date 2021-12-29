import { AUTH_USER, AUTH_ERROR, AUTH_LOGOUT } from './auth_types';

export const mutateAuth = (credentials) => ({type: AUTH_USER, credentials});
export const mutateError = (credentials) => ({AUTH_ERROR, credentials});
export const mutateLogout = () => ({type: AUTH_LOGOUT});
