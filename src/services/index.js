import { post, get, remove } from '../api';
import BASE_URI from '../constants/url';
import useRootStore from '../store/root';

export const loginService = async (credentials) => {
  const rootStore = useRootStore();
  const response = await post(`${BASE_URI}v1/users/login`, { credentials });
  rootStore.setToken(response.headers.authorization.split(' ')[1]);
  return response.data;
};

export const registerService = async (credentials) => {
  const rootStore = useRootStore();
  const response = await post(`${BASE_URI}v1/users`, { credentials });
  rootStore.setToken(response.headers.authorization.split(' ')[1]);
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
  const rootStore = useRootStore();
  const token = rootStore.currentToken;
  const options = { token };
  await remove(`${BASE_URI}v1/users/logout`, options);
  rootStore.$reset();
};
