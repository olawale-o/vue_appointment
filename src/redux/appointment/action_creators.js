import { APPOINTMENT_ALL, APPOINTMENT_ADD, APPOINTMENT_DELETE } from './appointment_types';

export const actionAppointments = () => ({type: `appointment/${APPOINTMENT_ALL}`});
export const actionAppointmentAdd = (credentials) => ({type: `appointment/${APPOINTMENT_ADD}`, credentials});
export const actionAppointmentDelete = (credentials) => ({type: `appointment/${APPOINTMENT_DELETE}`, credentials});
