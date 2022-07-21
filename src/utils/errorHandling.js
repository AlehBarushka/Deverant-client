import { AUTH_STATUS_ERROR } from '../constants/error';

/**
 * @description The function checks the status of the response from the server.
 * @param {Object} apiResponse - Response from server.
 * @returns {Error|String} returns Error if response status - false.
 */
export const apiErrorHandle = apiResponse => {
  if (apiResponse.status === false) {
    const errorMessageFromBack = apiResponse.description;

    throw new Error(errorMessageFromBack);
  }

  return 'No error detected!';
};

/**
 * @description The function return an error.
 * @returns {Error} returns an Error with auth status error message.
 */
export const getAuthSatatusError = () => {
  throw new Error(AUTH_STATUS_ERROR);
};
