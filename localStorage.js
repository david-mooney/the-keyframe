export const loadState = id => {
  try {
    const savedState = localStorage.getItem(id);
    return JSON.parse(savedState) || undefined;
  } catch (error) {
    console.warn(error);
    return undefined;
  }
};

export const saveState = (id, state) => {
  try {
    localStorage.setItem(id, JSON.stringify(state));
  } catch (error) {
    console.warn(error);
  }
};
