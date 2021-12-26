import { DOCTOR_ALL, DOCTOR_ADD, DOCTOR_DELETE } from './doctor_types';

export const mutateDoctors = (credentials) => ({type: DOCTOR_ALL, credentials});
export const mutateDoctorAdd = (credentials) => ({type: DOCTOR_ADD, credentials});
export const mutateDoctorDelete = (credentials) => ({type: DOCTOR_DELETE, credentials});
