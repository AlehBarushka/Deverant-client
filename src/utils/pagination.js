import { LIMIT_OF_PROJECTS } from '../constants/pagination';

/**
 * @description The function returns the number of pages for pagination.
 * @param {Number} totalItems - Total number of projects.
 * @returns {Number} The number of pages for pagination.
 */
export const getTotalPages = totalItems => {
  return Math.ceil(totalItems / LIMIT_OF_PROJECTS);
};
