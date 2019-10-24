const moment = require("moment");
/**
 *
 * @param {string} startDate
 * @param {string} endDate
 * @param {string} startTime
 * @param {string} endTime
 */
const calcDuration = (
  startDate,
  endDate,
  startTime = "00:00:00",
  endTime = "00:00:00"
) => {
  if (startDate && startTime && endDate && endTime) {
    const startDateTime = moment(
      startDate + " " + startTime,
      "MM/DD/YYYY h:mm A"
    );
    const endDateTime = moment(endDate + " " + endTime, "MM/DD/YYYY h:mm A");
    const duration = moment.duration(endDateTime.diff(startDateTime));
    return humanizeDuration(duration);
  } else return "";
};

const humanizeDuration = duration => {
  const hours = parseInt(duration.asHours());
  const minutes = parseInt(duration.asMinutes()) % 60;
  if (duration > 0) {
    if (minutes === 0) {
      return `${hours}h`;
    } else if (hours === 0) {
      return `${minutes}m`;
    } else return `${hours}h ${minutes}m`;
  } else {
    return "";
  }
};

module.exports = { calcDuration };
