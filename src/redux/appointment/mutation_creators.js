import { APPOINTMENT_ALL, APPOINTMENT_ADD, APPOINTMENT_DELETE, APPOINTMENT_RESET} from './appointment_types';

export const mutateAppointments = (credentials) => ({type: APPOINTMENT_ALL, credentials});
export const mutateAppointmentAdd = (credentials) => ({type: APPOINTMENT_ADD, credentials});
export const mutateAppointmentDelete = (credentials) => ({type: APPOINTMENT_DELETE, credentials});
export const mutateAppointmentReset = () => ({type: APPOINTMENT_RESET});
