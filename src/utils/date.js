import { INCORRECT_DATE_FORMAT, LAST_UPDATE_DATE_ERROR } from '../constants/error';
import {
  MINUTE_IN_MILLISECONDS,
  HOUR_IN_MILLISECONDS,
  DAY_IN_MILLISECONDS,
  MONTH_IN_MILLISECONDS,
  TIME_ZONE,
  YEAR_IN_MILLISECONDS,
} from '../constants/time';

import { dateValidator } from './errorHandling';

/**
 * @description The function convert the time of the last update to a string depending on the elapsed time.
 * @param {String} date - The time of the last update in format '2022-07-22 10:02:27.326776'.
 * @returns {String} The time of the last update in the format 'Last update 1 minute ago'.
 * @example
 * // returns 'Last update 1 hour ago'
 * convertLastUpdateTime('2022-07-26 10:41:34.488091')
 */
export const convertLastUpdateTime = date => {
  if (!date) {
    return LAST_UPDATE_DATE_ERROR;
  }

  const isValidDate = dateValidator(date);

  if (!isValidDate) {
    return INCORRECT_DATE_FORMAT;
  }

  const lastUpdateTimeInMilliseconds = Date.parse(date) + TIME_ZONE;

  const millisecondsAgo = Date.now() - lastUpdateTimeInMilliseconds;

  const minutesAgo = Math.floor(millisecondsAgo / MINUTE_IN_MILLISECONDS);
  const hoursAgo = Math.floor(millisecondsAgo / HOUR_IN_MILLISECONDS);
  const daysAgo = Math.floor(millisecondsAgo / DAY_IN_MILLISECONDS);
  const monthsAgo = Math.floor(millisecondsAgo / MONTH_IN_MILLISECONDS);
  const yearsAgo = Math.floor(millisecondsAgo / YEAR_IN_MILLISECONDS);

  //minutes ago
  if (millisecondsAgo < HOUR_IN_MILLISECONDS) {
    return `Last update ${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  }

  //hours ago
  if (millisecondsAgo < DAY_IN_MILLISECONDS) {
    return `Last update ${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  }

  //days ago
  if (millisecondsAgo < MONTH_IN_MILLISECONDS) {
    return `Last update ${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  }

  //months ago
  if (millisecondsAgo < YEAR_IN_MILLISECONDS) {
    return `Last update ${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`;
  }

  //years ago
  if (millisecondsAgo > YEAR_IN_MILLISECONDS) {
    return `Last update ${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`;
  }
};
