import axios from 'axios';
import { BASE_URL } from '../constants/api';
import { apiErrorHandle } from '../utils/errorHandling';

/**
 * @typedef {Object} RegistrationData
 * @property {String} RegistrationData.userName - Username.
 * @property {String} RegistrationData.email - Existing email.
 * @property {String} RegistrationData.password - Password. Minimum of 6 characters.
 */
/**
 * @typedef {Object} LoginData
 * @property {String} LoginData.email - Existing email.
 * @property {String} LoginData.password - Password. Minimum of 6 characters.
 */

export const authAPI = {
  /**
   * @description The method creates a new user.
   * @param {RegistrationData} registrationData - An object with registration data (email, username, password).
   * @returns {Object} An object with a token and some data.
   */
  async createAccount({ userName, email, password }) {
    const { data } = await axios.post(
      `${BASE_URL}create_account/${email}?password=${password}&user_name=${userName}`,
    );

    //The server part returns the status code 200 to an existing email in the database. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },

  /**
   * @description The method logins the user.
   * @param {LoginData} loginData - An object with login data (email, password).
   * @returns {Object} An object with a token.
   */
  async login({ email, password }) {
    const { data } = await axios.get(`${BASE_URL}login/${email}?password=${password}`);

    //The server part returns the status code 200 if the email or password is incorrect. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },

  /**
   * @description The user logout method.
   * @param {String} token - Auth user token.
   * @returns {Object} An object with a status.
   */
  async logout(token) {
    await axios.put(`${BASE_URL}logout/${token}`);
  },

  /**
   * @description The method checks the user's authorization status.
   * @param {String} token - Auth user token.
   * @returns {Object} An object with a status, email, and userName.
   */
  async authStatus(token) {
    const { data } = await axios.get(`${BASE_URL}getMe/${token}`);

    return data;
  },
};
