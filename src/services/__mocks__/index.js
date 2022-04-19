const mockError = false;
const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'General Medicine',
    picture: 'https://placeimg.com/640/480/any',
    user_id: 1
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    specialty: 'Dietician',
    picture: 'https://placeimg.com/640/480/people',
    user_id: 1
  },
];

const doctor = {
  id: 1,
  name: 'John Doe',
  specialty: 'Cardiology',
  picture: 'https://placeimg.com/640/480/people',
  user_id: 1,
};

export const getDoctorsService = async () => new Promise((resolve) => {
  if (mockError) {
    throw new Error('Error');
  }
  resolve({
    data: {
      doctors,
    }
  });
});

export const addDoctorService = async (credentials) => new Promise((resolve) => {
  if (mockError) {
    throw new Error('Error');
  }
  resolve({
    data: {
      doctor: credentials,
    }
  });
});

export const deleteDoctorService = async (credentials) => new Promise((resolve) => {
  if (mockError) {
    throw new Error('Error');
  }
  resolve({
    data: {}
  });
});

export const getDoctorService = async (credentials) => new Promise((resolve) => {
  if (mockError) {
    throw new Error('Error');
  }
  resolve({
    data: {
      doctor,
    }
  });
});

export const getter = {
  doctors: (state) => doctors,
  getDoctor: (state) => (id) => doctors.find(doctor => doctor.id === id),
};
