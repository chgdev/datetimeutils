const { calcDuration } = require("./date-calc");

describe("calcDuration()", () => {
  let startDate = "03/12/2019";
  let startTime = "13:30:00";
  let endDate = "03/12/2019";
  let endTime = "19:30:00";

  describe("when all dates and times are passed in and valid", () => {
    test("should return only an hour value whem minutes = 0", () => {
      const expectedDuration = "6h";
      const result = calcDuration(startDate, endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return only a minute value when hours = 0", () => {
      startTime = "14:01:00";
      endTime = "14:45:00";

      const expectedDuration = "44m";
      const result = calcDuration(startDate, endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return an hour and minute value", () => {
      startTime = "10:01:00";
      endTime = "14:45:00";

      const expectedDuration = "4h 44m";
      const result = calcDuration(startDate, endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return the correct hours when longer than a day", () => {
      startTime = "10:01:00";
      endDate = "03/14/2019";
      endTime = "14:45:00";

      const expectedDuration = "52h 44m";
      const result = calcDuration(startDate, endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });
  });

  describe("when all dates and times are passed in but are invalid", () => {
    describe("when endDate is before start date", () => {
      test("should return a blank value for duration", () => {
        startDate = "2019-03-12T00:00:00.000Z";
        endDate = "2019-03-10T00:00:00.000Z";

        const expectedDuration = "";
        const result = calcDuration(startDate, endDate, startTime, endTime);
        expect(result).toBe(expectedDuration);
      });
    });
  });

  describe("when missing a value", () => {
    const expectedDuration = "";

    test("should return empty value when startDate is missing ", () => {
      const result = calcDuration(null, endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return empty value when startTime is missing ", () => {
      const result = calcDuration("", endDate, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return empty value when endDate is missing ", () => {
      const result = calcDuration(startDate, null, startTime, endTime);
      expect(result).toBe(expectedDuration);
    });

    test("should return empty value when endTime is missing ", () => {
      const result = calcDuration(startDate, "", startTime, endTime);
      expect(result).toBe(expectedDuration);
    });
  });
});
