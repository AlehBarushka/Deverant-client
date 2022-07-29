/**
 * @description The function set the item to the local storage.
 * @param {String} keyName - Key name.
 * @param {String} value - Item value.
 */
export const setItemToLocalStorage = (keyName, value = '') => {
  localStorage.setItem(keyName, value);
};

/**
 * @description The function get the item from the local storage.
 * @param {String} keyName - Key name.
 * @returns {String} Item from local storage.
 */
export const getItemFromLocalStorage = keyName => {
  return localStorage.getItem(keyName);
};
