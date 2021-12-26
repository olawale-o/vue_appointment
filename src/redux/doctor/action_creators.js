import { DOCTOR_ALL, DOCTOR_ADD, DOCTOR_DELETE } from './doctor_types';

export const actionDoctors = () => ({type: `doctor/${DOCTOR_ALL}`});
export const actionDoctorAdd = (credentials, cb) => ({type: `doctor/${DOCTOR_ADD}`, credentials, cb});
export const actionDoctorDelete = (credentials) => ({type: `doctor/${DOCTOR_DELETE}`, credentials});
