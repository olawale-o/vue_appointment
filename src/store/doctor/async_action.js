import useRootStore from '../root';
import { getDoctorService, addDoctorService, deleteDoctorService } from '@/services';
export const all = async (setState) => {
  const rootStore = useRootStore();
  rootStore.setLoading();
  try {
    const response = await getDoctorService(); 
    setState(response.data.doctors);
    rootStore.setLoading();
  } catch(e) {
    rootStore.setError(error.message);
    rootStore.setLoading();
  }
};

export const add = async (credentials, cb, setDoctor, setDoctors) => {
  const rootStore = useRootStore();
  try {
    const response = await addDoctorService(credentials);
    const doctor = response.data.doctor;
    setDoctor(doctor);
    setDoctors(doctor);
    rootStore.setLoading();
    cb(`/doctor/${doctor.id}`);
  } catch (error) {
    rootStore.setError(error.message);
    rootStore.setLoading();
  }
};

export const deleteDoctor = async (credentials, cb) => {
  const rootStore = useRootStore();
  rootStore.setLoading();
  try {
    await deleteDoctorService(credentials)
    cb(credentials);
    rootStore.setLoading();
  } catch(e) {
    rootStore.setError(e.message);
    rootStore.setLoading();
  }
};

export const singleDoctor = async (credential, setDoctor) => {
  const rootStore = useRootStore();
  rootStore.setLoading();
  return getDoctorService(credential)
    .then((response) => {
      rootStore.setLoading();
      setDoctor(response.data.doctor);
      return response.data.doctor;
    }).catch((error) => {
      rootStore.setError(error.message);
      rootStore.setLoading();
    })
};
