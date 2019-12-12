const { getCalendarsRangeDate, getDefaultCalendarStartDate } = require("./calendar-date");
const moment = require("moment");

describe("Calendar Date Helpers", () => {
  const assignmentStartDate = "06/01/2019";

  const today = moment();
  const todayDate = moment(today, "MM/DD/YYYY").toDate();
  const todayString = today.clone().format("MM/DD/YYYY");
  const todayMoment = moment(todayDate, "MM/DD/YYYY");

  const shifts = [
    {
      id: 1,
      startDate: "09/13/2019"
    }
  ];

  describe("getCalendarsRangeDate", () => {
    let calendarRangeDate;
    let assignmentDate;

    describe("when an assignment date has been passed in", () => {
      beforeAll(() => {
        assignmentDate = assignmentStartDate;
        calendarRangeDate = getCalendarsRangeDate(shifts, assignmentDate);
      });

      test("should return the assignment date as the calendar range date", () => {
        expect(calendarRangeDate).toEqual(moment(assignmentDate, "MM/DD/YYYY"));
      });
    });

    describe("when no assignment date has been passed in", () => {
      beforeAll(() => {
        assignmentDate = undefined;
      });

      describe("when there are shifts", () => {
        beforeAll(() => {
          calendarRangeDate = getCalendarsRangeDate(shifts, assignmentDate);
        });

        test("should return the first shift's start date as the calendar range date", () => {
          expect(calendarRangeDate).toEqual(moment(shifts[0].startDate, "MM/DD/YYYY"));
        });
      });

      describe("when there aren't shifts", () => {
        beforeAll(() => {
          calendarRangeDate = getCalendarsRangeDate(undefined, assignmentDate);
        });

        test("should return today's date as the calendar range date", () => {
          expect(moment(calendarRangeDate, "MM/DD/YYYY").isSame(todayMoment, "day")).toBe(true);
        });
      });

      describe("when the shifts array is empty", () => {
        beforeAll(() => {
          calendarRangeDate = getCalendarsRangeDate([], assignmentDate);
        });

        test("should return today's date as the calendar range date", () => {
          expect(moment(calendarRangeDate, "MM/DD/YYYY").isSame(todayMoment, "day")).toBe(true);
        });
      });
    });
  });

  describe("getDefaultCalendarStartDate", () => {
    let rangeStartDate;
    let rangeEndDate;
    let defaultCalStartDate;

    describe("when today's date is before the calendars range start date", () => {
      beforeAll(() => {
        rangeStartDate = moment(todayString, "MM/DD/YYYY").clone().add(1, "month");
        rangeEndDate = moment(todayString, "MM/DD/YYYY").clone().add(2, "month");

        defaultCalStartDate = getDefaultCalendarStartDate(rangeStartDate, rangeEndDate);
      });

      test("should set the middle calendar's initial start date to the calendars range start date", () => {
        expect(defaultCalStartDate).toEqual(rangeStartDate.toDate());
      });
    });

    describe("when today's date is after the calendars range end date", () => {
      beforeAll(() => {
        rangeStartDate = moment(todayString, "MM/DD/YYYY").clone().add(-2, "month");
        rangeEndDate = moment(todayString, "MM/DD/YYYY").clone().add(-1, "month");

        defaultCalStartDate = getDefaultCalendarStartDate(rangeStartDate, rangeEndDate);
      });

      test("should set the middle calendar's initial start date to the calendars range start date", () => {
        expect(defaultCalStartDate).toEqual(rangeStartDate.toDate());
      });
    });

    describe("when today's date is between the calendars range start and end date", () => {
      beforeAll(() => {
        rangeStartDate = moment(todayString, "MM/DD/YYYY").clone().add(-1, "month");
        rangeEndDate = moment(todayString, "MM/DD/YYYY").clone().add(1, "month");

        defaultCalStartDate = getDefaultCalendarStartDate(rangeStartDate, rangeEndDate);
      });

      test("should return today's date as the middle calendar's initial start date", () => {
        expect(moment(defaultCalStartDate, "MM/DD/YYYY").isSame(todayMoment, "day")).toBe(true);
      });
    });
  });
});
