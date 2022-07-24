import axios from 'axios';

import { BASE_URL } from '../constants/api';

import { apiErrorHandle } from '../utils/errorHandling';

export const projectsAPI = {
  /**
   * @description The method get all projects.
   * @param {Srting} token - Auth user token.
   * @returns {Array} An array with objects of projects.
   */
  async getProjects(token) {
    const { data } = await axios.get(`${BASE_URL}all_projects/${token}`);

    //The server part returns the status code 200 if the email or password is incorrect. I had to throw the error manually
    apiErrorHandle(data);

    if (data.description === `you haven't any projects`) {
      return [];
    }

    //crutch, data comes from the server in the form of an object with objects
    return Object.values(data);
  },
};
