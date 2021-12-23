import { AUTH_USER, AUTH_ERROR } from './auth_types';

export const actionAuth = (credentials) => ({type: `auth/${AUTH_USER}`, credentials});
export const actionError = (credentials) => ({type: `auth/${AUTH_ERROR}`, credentials});
