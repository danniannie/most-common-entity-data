import { findSevenDayMostCommonData } from "../lib/findSevenDayMostCommonData";

const currentValue = {
  id: "123",
  timestamp: new Date("2021-06-01T02:24:10.971Z"),
  entities: [
    {
      id: "1",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfTestRange1: 151,
      countOfTestRange2: 21,
    },
    {
      id: "2",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfTestRange1: 151,
      countOfTestRange2: 21,
    },
  ],
};

const otherValue = {
  id: "123",
  timestamp: new Date("2021-05-25T02:24:10.971Z"),
  entities: [
    {
      id: "1",
      timestamp: new Date("2021-05-25T02:24:10.971Z"),
      countOfTestRange1: 100,
      countOfTestRange2: 21,
    },
    {
      id: "2",
      timestamp: new Date("2021-05-25T02:24:10.971Z"),
      countOfTestRange1: 151,
      countOfTestRange2: 19,
    },
  ],
};

const testRanges = ["countOfTestRange1", "countOfTestRange2"];
const testRangeLookup = {
  countOfTestRange1: "Tester",
  countOfTestRange2: "Tester2",
};

describe("findSevenDayTagData", () => {
  it("should return undefined when both logs are undefined", () => {
    expect(
      findSevenDayMostCommonData(
        undefined,
        undefined,
        testRanges,
        testRangeLookup
      )
    ).toEqual(undefined);
  });
  it("should return undefined when one of the histories is undefined", () => {
    expect(
      findSevenDayMostCommonData(
        currentValue,
        undefined,
        testRanges,
        testRangeLookup
      )
    ).toEqual(undefined);
  });
  it("should return Tester when values have been most consistently in range 1", () => {
    expect(
      findSevenDayMostCommonData(
        currentValue,
        otherValue,
        testRanges,
        testRangeLookup
      )
    ).toEqual([
      {
        entityId: "1",
        tag: "Tester",
      },
      {
        entityId: "2",
        tag: "Tester2",
      },
    ]);
  });
  it("should return Tester when values have been most consistently in range 1", () => {
    expect(
      findSevenDayMostCommonData(
        currentValue,
        otherValue,
        testRanges,
        testRangeLookup
      )
    ).toEqual([
      {
        entityId: "1",
        tag: "Tester",
      },
      {
        entityId: "2",
        tag: "Tester2",
      },
    ]);
  });
});
