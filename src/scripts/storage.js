export const setStorage = (value, key = 'appointment') => {
  localStorage.setItem(key, JSON.stringify(value));
};
  
export const getStorage = (key = 'appointment') => JSON.parse(localStorage.getItem(key));
  