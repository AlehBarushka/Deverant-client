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
