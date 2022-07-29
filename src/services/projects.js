import axios from 'axios';

import { BASE_URL } from '../constants/api';
import { LIMIT_OF_PROJECTS } from '../constants/pagination';

import { apiErrorHandle } from '../utils/errorHandling';

export const projectsAPI = {
  /**
   * @description The method get all projects.
   * @param {Srting} token - Auth user token.
   * @param {Number} [offset] - offset for projects.
   * @returns {Object} An object with total and list of projects.
   */
  async getProjects(token, offset = 0) {
    const { data } = await axios.get(
      `${BASE_URL}all_projects/${token}?offset=${offset}&limit=${LIMIT_OF_PROJECTS}`,
    );

    //The server part returns the status code 200 if the token is not valid. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },
};
