import { findSevenDayMostCommonData } from "./lib/findSevenDayMostCommonData";

const range = [
  "countOfPassengerRange1",
  "countOfPassengerRange2",
  "countOfPassengerRange3",
  "countOfPassengerRange4",
];

const rangeLookup = {
  countOfPassengerRange1: "10,000 - 20,000 people",
  countOfPassengerRange2: "20,000 - 30,000 people",
  countOfPassengerRange3: "30,000 - 40,000 people",
  countOfPassengerRange4: "40,000 - 50,000 people",
};

const todayValue = {
  id: "train-123",
  timestamp: new Date("2021-06-01T02:24:10.971Z"),
  entities: [
    {
      id: "1",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 151,
      countOfPassengerRange2: 21,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
    {
      id: "2",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 200,
      countOfPassengerRange2: 21,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
    {
      id: "3",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 354,
      countOfPassengerRange2: 20,
      countOfPassengerRange3: 500,
      countOfPassengerRange4: 0,
    },
    {
      id: "4",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 10,
      countOfPassengerRange2: 260,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
  ],
};

const lastWeekValue = {
  id: "train-123",
  timestamp: new Date("2021-06-01T02:24:10.971Z"),
  entities: [
    {
      id: "1",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 100,
      countOfPassengerRange2: 19,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
    {
      id: "2",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 121,
      countOfPassengerRange2: 21,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
    {
      id: "3",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 151,
      countOfPassengerRange2: 10,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
    {
      id: "4",
      timestamp: new Date("2021-06-01T02:24:10.971Z"),
      countOfPassengerRange1: 10,
      countOfPassengerRange2: 213,
      countOfPassengerRange3: 0,
      countOfPassengerRange4: 0,
    },
  ],
};

const sevenDayAverages = findSevenDayMostCommonData(
  todayValue,
  lastWeekValue,
  range,
  rangeLookup
);

console.log(sevenDayAverages);
