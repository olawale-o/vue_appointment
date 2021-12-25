import { DOCTOR_ALL, DOCTOR_ADD } from './doctor_types';

export const mutateDoctors = (credentials) => ({type: DOCTOR_ALL, credentials});
export const mutateDoctorAdd = (credentials) => ({type: DOCTOR_ADD, credentials});
