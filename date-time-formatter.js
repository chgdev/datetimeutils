const moment = require("moment");

const FRIENDLY_TIME_FORMAT = "h:mm A";
const FRIENDLY_DATE_FORMAT = "MM/DD/YYYY";
const SERVER_TIME_FORMAT = moment.HTML5_FMT.TIME_SECONDS; // HH:mm:ss
const SERVER_DATE_TIME_FORMAT = moment.ISO_8601; // 2019-03-12T18:27:18.683Z

const incomingDateFormats = [ "MM/DD/YYYY", moment.HTML5_FMT.DATE, moment.ISO_8601 ];
const toMMMDDYYYY = dateStr => dateStr ? moment.utc(dateStr, incomingDateFormats).format("MMM D, YYYY") : "";
const toMMMDD = dateStr => dateStr ? moment.utc(dateStr, incomingDateFormats).format("MMM D") : "";
const toMMDDYYYY = dateStr => dateStr ? moment.utc(dateStr, incomingDateFormats).format("MM/DD/YYYY") : "";
const toHMMa = timeStr => timeStr ? moment.utc(timeStr, "HH:mm:ss").format("h:mm a") : "";
const toHMMA = timeStr => timeStr ? moment.utc(timeStr, "HH:mm:ss").format("h:mm A") : "";

/**
 * Formats a time string into the format h:mm A (e.g. 9:00 AM, 12:00 PM, 12:00 AM)
 * @param {String} time The time string you would like formatted
 */
const fromHHmmssTohmmA = time => time ? moment(time, SERVER_TIME_FORMAT).format(FRIENDLY_TIME_FORMAT) : "";

/**
 * Formats a time string into the format HH:mm:ss (e.g. 09:00:00, 12:00:00, 00:00:00)
 * @param {String} time The time string you would like formatted
 */
const fromhmmAToHHmmss = time => time ? moment(time, FRIENDLY_TIME_FORMAT).format(SERVER_TIME_FORMAT) : undefined;

/**
 * Formats a date string into the format MM/DD/YYYY (e.g 03/08/2019)
 * @param {String} date The date string you would like formatted
 */
const toISOString = date => date ? moment.utc(`${date} 00:00:00`, FRIENDLY_DATE_FORMAT).toISOString() : "";

module.exports = {
  toISOString,
  fromhmmAToHHmmss,
  fromHHmmssTohmmA,
  toHMMA,
  toHMMa,
  toMMDDYYYY,
  toMMMDD,
  toMMMDDYYYY
};