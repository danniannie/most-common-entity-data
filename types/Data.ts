interface Data {
  [index: string]: any;
  id: string;
  entities: DataEntity[];
}

interface DataEntity {
  [index: string]: any;
  id: string;
  timestamp: Date;
  countOfPassengerRange1?: number;
  countOfPassengerRange2?: number;
  countOfPassengerRange3?: number;
  countOfPassengerRange4?: number;
}
