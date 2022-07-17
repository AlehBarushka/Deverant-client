/**
 * @description The function saves the item to the local storage.
 * @param {String} fieldName - Item name.
 * @param {String} value - Item value.
 */
export const setToLocalStorage = (fieldName, value) => {
  localStorage.setItem(fieldName, value);
};
