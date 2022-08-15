import axios from 'axios';

import { LIMIT_OF_PROJECTS } from '../constants/pagination';

import { apiErrorHandle } from '../utils/errorHandling';

/**
 * @typedef {Object} ProjectData
 * @property {String} ProjectData.title - Project title.
 * @property {String} ProjectData.description - Project description.
 */

export const projectsAPI = {
  /**
   * @description The method get all projects.
   * @param {String} token - Auth user token.
   * @param {Number} [offset] - offset for projects.
   * @returns {Object} An object with total and list of projects.
   */
  async getProjects(token, offset = 0) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}all_projects/${token}?offset=${offset}&limit=${LIMIT_OF_PROJECTS}`,
    );

    //The server part returns the status code 200 if the token is not valid. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },

  /**
   * @description The method create a new project.
   * @param {String} token - Auth user token.
   * @param {ProjectData} projectData - Project data object.
   * @returns {Object} An object with new project.
   */
  async createNewProject(token, { title, description }) {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}project/${token}?name=${title}&description=${description}`,
    );

    //The server part returns the status code 200 if the token is not valid. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },

  /**
   * @description The method create a new project.
   * @param {String} token - Auth user token.
   * @param {Number} id - Project id.
   * @returns {Object} An object with success status.
   */
  async deleteProject(token, id) {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_URL}project/${token}?project_id=${id}`,
    );

    return data;
  },

  /**
   * @description The method get project by id.
   * @param {String} token - Auth user token.
   * @param {Number} id - Project id.
   * @returns {Object} An object with project data.
   */
  async getProject(token, id) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}project/${token}?project_id=${id}`,
    );

    return data;
  },

  /**
   * @description The method update project.
   * @param {String} token - Auth user token.
   * @param {Number} id - Project id.
   * @param {ProjectData} projectData - Project data object.
   * @returns {Object} An object with project data.
   */
  async updateProject(token, id, { title, description }) {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}project/${token}?project_id=${id}&name=${title}&description=${description}`,
    );

    //The server part returns the status code 200 if the token is not valid. I had to throw the error manually
    apiErrorHandle(data);

    return data;
  },

  /**
   * @description The method update project price.
   * @param {String} token - Auth user token.
   * @param {Number} id - Project id.
   * @param {Number} price - Project price.
   * @returns {Object} An object with updated project price data.
   */
  async updateProjectPrice(token, id, price) {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}project_price/${token}?project_id=${id}&price=${price}`,
    );

    return data;
  },
};
