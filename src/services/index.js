import { post, get, remove } from '../api';
import { getStorage, setStorage } from '../scripts/storage';
import BASE_URI from '../constants/url';

export const loginService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users/login`, { credentials });
  setStorage(response.headers.authorization.split(' ')[1], 'token');
  return response.data;
};

export const registerService = async (credentials) => {
  const response = await post(`${BASE_URI}v1/users`, { credentials });
  setStorage(response.headers.authorization.split(' ')[1], 'token');
  return response.data;
};

export const getDoctorsService = async () => {
  const response = await get(`${BASE_URI}v1/doctors`);
  return response.data;
};

export const getDoctorService = async (id) => {
  const response = await get(`${BASE_URI}v1/doctors/${id}`);
  return response.data;
};

export const addDoctorService = async (doctor) => {
  const options = { credentials: doctor, };
  const response = await post(`${BASE_URI}v1/doctors`, options);
  return response.data;
};

export const deleteDoctorService = async (id) => {
  await remove(`${BASE_URI}v1/doctors/${id}`);
};

export const createAppointmentService = async (appointment) => {
  const options = { credentials: appointment };
  const response = await post(`${BASE_URI}v1/appointments`, options);
  return response.data;
};

export const getAppointmentsService = async () => {
  const response = await get(`${BASE_URI}v1/appointments`);
  return response.data;
};

export const deleteAppointmentService = async (id) => {
  await remove(`${BASE_URI}v1/appointments/${id}`);
};

export const logoutService = async () => {
  const token = getStorage('token');
  const options = { token };
  await remove(`${BASE_URI}v1/users/logout`, options);
  setStorage('', 'token');
};
