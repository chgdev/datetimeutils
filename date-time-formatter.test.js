const dateTimeFormatter = require("./date-time-formatter");

describe("Date Time Formatter", () => {
  describe("formatDateToMMMDDYYYY", () => {
    let formattedDate;

    describe("when the format of the date is MM/DD/YYYY", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY("10/01/2019");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1, 2019");
      });
    });

    describe("when the format of the date is YYYY-MM-DD", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY("2019-10-01");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1, 2019");
      });
    });

    describe("when the format of the date is ISO_8601", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY("2019-10-01T00:00:00");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1, 2019");
      });
    });

    describe("when the format of the date is ISO_8601 with Z", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY("2019-10-01T23:00:00.000Z");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1, 2019");
      });
    });

    describe("when null is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY(null);
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("");
      });
    });

    describe("when bad format is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDDYYYY("break code");
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("Invalid date");
      });
    });
  });

  describe("formatDateToMMDDYYYY", () => {
    let formattedDate;

    describe("when the format of the date is MM/DD/YYYY", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY("10/01/2019");
      });

      test("should return 10/01/2019", () => {
        expect(formattedDate).toEqual("10/01/2019");
      });
    });

    describe("when the format of the date is YYYY-MM-DD", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY("2019-10-01");
      });

      test("should return 10/01/2019", () => {
        expect(formattedDate).toEqual("10/01/2019");
      });
    });

    describe("when the format of the date is ISO_8601", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY("2019-10-01T00:00:00");
      });

      test("should return 10/01/2019", () => {
        expect(formattedDate).toEqual("10/01/2019");
      });
    });

    describe("when the format of the date is ISO_8601 with Z", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY("2019-10-01T23:00:00.000Z");
      });

      test("should return 10/01/2019", () => {
        expect(formattedDate).toEqual("10/01/2019");
      });
    });

    describe("when null is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY(null);
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("");
      });
    });

    describe("when bad format is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMDDYYYY("break code");
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("Invalid date");
      });
    });       
  });

  describe("formatDateToMMMDD", () => {
    let formattedDate;

    describe("when the format of the date is MM/DD/YYYY", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD("10/01/2019");
      });

      test("should return OCT 1", () => {
        expect(formattedDate).toEqual("Oct 1");
      });
    });

    describe("when the format of the date is YYYY-MM-DD", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD("2019-10-01");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1");
      });
    });

    describe("when the format of the date is ISO_8601", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD("2019-10-01T00:00:00");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1");
      });
    });

    describe("when the format of the date is ISO_8601 with Z", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD("2019-10-01T23:00:00.000Z");
      });

      test("should return OCT 1, 2019", () => {
        expect(formattedDate).toEqual("Oct 1");
      });
    });

    describe("when null is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD(null);
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("");
      });
    });

    describe("when bad format is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toMMMDD("break code");
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("Invalid date");
      });
    });    
  });

  describe("formatTimeToHMMa", () => {
    let formattedTime;

    describe("when the time format is HH:MM:SS", () => {
      beforeAll(() => {
        formattedTime = dateTimeFormatter.toHMMa("13:30:00");
      });

      test("should return the time formated in h:mm a", () => {
        expect(formattedTime).toBe("1:30 pm");
      });
    });

    describe("when null is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toHMMa(null);
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("");
      });
    });

    describe("when bad format is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toHMMa("break code");
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("Invalid date");
      });
    });
  });

  describe("formatTimeToHMMA", () => {
    let formattedTime;

    describe("when the time format is HH:MM:SS", () => {
      beforeAll(() => {
        formattedTime = dateTimeFormatter.toHMMA("13:30:00");
      });

      test("should return the time formated in h:mm A", () => {
        expect(formattedTime).toBe("1:30 PM");
      });
    });

    describe("when null is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toHMMA(null);
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("");
      });
    });

    describe("when bad format is passed", () => {
      beforeAll(() => {
        formattedDate = dateTimeFormatter.toHMMA("break code");
      });

      test("should return an empty string", () => {
        expect(formattedDate).toEqual("Invalid date");
      });
    });
  });

  describe("when formatting a time to h:mm A", () => {
    let expectedFormattedTime;

    describe("when formatting a valid time", () => {
      const validTimes = ["16:38:00"];
      beforeEach(() => {
        expectedFormattedTime = "4:38 PM";
      });

      validTimes.forEach(time => {
        test(`should format ${time} as a friendly time (h:mm A)`, () => {
          const result = dateTimeFormatter.fromHHmmssTohmmA(time);
          expect(result).toBe(expectedFormattedTime);
        });
      });
    });

    describe("when formatting a falsy time", () => {
      const falsyTimes = [ null, undefined, "" ];
      beforeEach(() => {
        expectedFormattedTime = "";
      });

      falsyTimes.forEach(time => {
        test(`should not format a(n) ${time} time`, () => {
          const result = dateTimeFormatter.fromHHmmssTohmmA(time);
          expect(result).toBe(expectedFormattedTime);
        });
      });
    });
  });

  describe("when formatting a time to HH:mm:ss", () => {
    let expectedFormattedTime;

    describe("when formatting a valid time", () => {
      const validTimes = ["4:38 PM"];
      beforeEach(() => {
        expectedFormattedTime = "16:38:00";
      });

      validTimes.forEach(time => {
        test(`should format ${time} as a server time format (HH:mm:ss)`, () => {
          const result = dateTimeFormatter.fromhmmAToHHmmss(time);
          expect(result).toBe(expectedFormattedTime);
        });
      });
    });

    describe("when formatting a falsy time", () => {
      const falsyTimes = [ null, undefined, "" ];
      beforeEach(() => {
        expectedFormattedTime = undefined;
      });

      falsyTimes.forEach(time => {
        test(`should not format a(n) ${time} time`, () => {
          const result = dateTimeFormatter.fromhmmAToHHmmss(time);
          expect(result).toBe(expectedFormattedTime);
        });
      });
    });
  });

  describe("toISOString", () => {
    test("should take an ISO Datestring expected return is dateFormat MM/DD/YYYY", () => {
      expect(dateTimeFormatter.toISOString("04/24/2019")).toEqual("2019-04-24T00:00:00.000Z");
    });

    test("should return empty string when given something that is falsy", () => {
      expect(dateTimeFormatter.toISOString("")).toEqual("");
    });

    test("should return null when given a string that cannot be parsed as a date.", () => {
      expect(dateTimeFormatter.toISOString("sdfw45ysdfg")).toEqual(null);
    });
  });
});
