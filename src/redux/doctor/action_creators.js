import { DOCTOR_ALL, DOCTOR_ADD } from './doctor_types';

export const actionDoctors = () => ({type: `doctor/${DOCTOR_ALL}`});
export const actionDoctorAdd = (credentials, cb) => ({type: `doctor/${DOCTOR_ADD}`, credentials, cb});
