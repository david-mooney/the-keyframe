export const storageId = 'tkf_darkMode';

export const getItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.warn(error);
  }
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(error);
  }
};
