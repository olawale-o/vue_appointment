import { AUTH_USER, AUTH_ERROR, AUTH_REGISTER, AUTH_LOGIN } from './auth_types';

export const actionAuth = (credentials) => ({type: `auth/${AUTH_USER}`, credentials});
export const actionRegister = (credentials, cb) => ({type: `auth/${AUTH_REGISTER}`, credentials, cb});
export const actionLogin = (credentials, cb) => ({type: `auth/${AUTH_LOGIN}`, credentials, cb});
export const actionError = (credentials) => ({type: `auth/${AUTH_ERROR}`, credentials});
