const { calcDuration, dateTimeFormatter, calendarDate } = require('./index');

describe("index", () => {
  describe("calcDuration", () => {
    test("should have imported function", () => {
      expect(calcDuration).toBeInstanceOf(Function);
    });
  });

  describe("calendarDate", () => {
    test("should contain getCalendarsRangeDate function", () => {
      expect(calendarDate.getCalendarsRangeDate).toBeInstanceOf(Function);
    });

    test("should contain getDefaultCalendarStartDate function", () => {
      expect(calendarDate.getDefaultCalendarStartDate).toBeInstanceOf(Function);
    });
  });

  describe("dateTimeFormatter", () => {
    test("should contain toMMMDDYYYY function", () => {
      expect(dateTimeFormatter.toMMMDDYYYY).toBeInstanceOf(Function);
    });

    test("should contain toMMMDD function", () => {
      expect(dateTimeFormatter.toMMMDD).toBeInstanceOf(Function);
    });
      
    test("should contain toMMDDYYYY function", () => {
      expect(dateTimeFormatter.toMMDDYYYY).toBeInstanceOf(Function);
    });

    test("should contain toHMMa function", () => {
      expect(dateTimeFormatter.toHMMa).toBeInstanceOf(Function);
    });

    test("should contain toHMMA function", () => {
      expect(dateTimeFormatter.toHMMA).toBeInstanceOf(Function);
    });

    test("should contain fromHHmmssTohmmA function", () => {
      expect(dateTimeFormatter.fromHHmmssTohmmA).toBeInstanceOf(Function);
    });

    test("should contain fromhmmAToHHmmss function", () => {
      expect(dateTimeFormatter.fromhmmAToHHmmss).toBeInstanceOf(Function);
    });

    test("should contain toISOString function", () => {
      expect(dateTimeFormatter.toISOString).toBeInstanceOf(Function);
    });
  });
});