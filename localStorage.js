export const storageId = 'keyframe_darkMode';

export const loadState = id => {
  try {
    const savedState = localStorage.getItem(id);
    return JSON.parse(savedState) || {};
  } catch (error) {
    console.warn(error);
  }
};

export const saveState = (id, state) => {
  try {
    localStorage.setItem(id, JSON.stringify(state));
  } catch (error) {
    console.warn(error);
  }
};
