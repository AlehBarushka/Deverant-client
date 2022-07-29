/**
 * @description The function convert the token into a valid one.
 * @param {String} secretKey - Part of the token.
 * @param {String} userAuthKey - Part of the token.
 * @returns {String} A valid token.
 */
export const tokenСonverter = (secretKey, userAuthKey) => {
  const validToken = `${secretKey}:${userAuthKey}`;

  return validToken;
};
