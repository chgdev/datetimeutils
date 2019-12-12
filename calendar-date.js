const moment = require("moment");

const getCalendarsRangeDate = (shifts, assignmentDate) => {
  let rangeDate;

  if (assignmentDate) {
    rangeDate = assignmentDate;
  } else if (shifts && shifts.length > 0) {
    rangeDate = shifts[0].startDate;
  } else {
    rangeDate = moment().toDate();
  }

  return moment(rangeDate, "MM/DD/YYYY");
};

const getDefaultCalendarStartDate = (calendarsRangeStartDate, calendarsRangeEndDate) => {
  const today = moment();

  let midStartDate = today.toDate();

  if (today.isBefore(calendarsRangeStartDate, "day") || today.isAfter(calendarsRangeEndDate, "day")) {
    midStartDate = calendarsRangeStartDate.toDate();
  }

  return midStartDate;
};

module.exports = {
  getCalendarsRangeDate,
  getDefaultCalendarStartDate
};
