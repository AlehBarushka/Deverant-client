import axios from 'axios';

import { BASE_URL } from '../constants/api';

export const projectsAPI = {
  /**
   * @description The method get all projects.
   * @param {Srting} token - Auth user token.
   * @returns {Array} An array with objects of projects.
   */
  async getProjects(token) {
    const { data } = await axios.get(`${BASE_URL}all_projects/${token}?`);

    return data;
  },
};
