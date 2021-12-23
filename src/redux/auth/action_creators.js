import { AUTH_USER, AUTH_ERROR, AUTH_REGISTER, AUTH_LOGIN } from './auth_types';

export const actionAuth = (credentials) => ({type: `auth/${AUTH_USER}`, credentials});
export const actionRegister = (credentials) => ({type: `auth/${AUTH_REGISTER}`, credentials});
export const actionLogin = (credentials) => ({type: `auth/${AUTH_LOGIN}`, credentials});
export const actionError = (credentials) => ({type: `auth/${AUTH_ERROR}`, credentials});
