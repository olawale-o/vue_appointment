import { DOCTOR_ALL, DOCTOR_ADD, DOCTOR_DELETE, DOCTOR_SINGLE, DOCTOR_RESET } from './doctor_types';

export const actionDoctors = () => ({type: `doctor/${DOCTOR_ALL}`});
export const actionDoctorAdd = (credentials, cb) => ({type: `doctor/${DOCTOR_ADD}`, credentials, cb});
export const actionDoctorDelete = (credentials) => ({type: `doctor/${DOCTOR_DELETE}`, credentials});
export const actionDoctorSingle = (credentials) => ({type: `doctor/${DOCTOR_SINGLE}`, credentials});
export const actionDoctorReset = () => ({type: `doctor/${DOCTOR_RESET}`});