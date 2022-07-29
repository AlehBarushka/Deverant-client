import { UNEXPECTED_API_ERROR_MESSAGE, AUTH_STATUS_ERROR } from '../constants/error';

/**
 * @description The function checks the status of the response from the server.
 * @param {Object} apiResponse - Response from server.
 * @returns {Error|String} An Error if response status - false.
 */
export const apiErrorHandle = apiResponse => {
  if (apiResponse.status === false) {
    const errorMessageFromBack = apiResponse.description;

    throw new Error(errorMessageFromBack);
  }

  return 'No error detected!';
};

/**
 * @description The function converts, if necessary, an error from the server.
 * @param {Object|String} apiResponseErrorData - An Error data from server.
 * @returns {String} Error message.
 */
export const apiResponseErrorDataConverter = apiResponseErrorData => {
  return apiResponseErrorData.detail ? UNEXPECTED_API_ERROR_MESSAGE : apiResponseErrorData;
};

/**
 * @description The function return an error.
 * @returns {Error} An Error with auth status error message.
 */
export const getAuthSatatusError = () => {
  throw new Error(AUTH_STATUS_ERROR);
};

/**
 * @description The the function checks the validity of the date.
 * @param {String} date - The date in format '2022-07-22 10:02:27.326776'.
 * @returns {Boolean} True or false.
 */
export const dateValidator = date => {
  if (Number.isNaN(Date.parse(date))) {
    return false;
  }

  return true;
};
