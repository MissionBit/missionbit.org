export interface FundraisingGoal {
  readonly start: number;
  readonly end: number;
  readonly name: string;
  readonly goalDollars: number;
}

export const fundraisingGoal: FundraisingGoal = {
  start: Date.parse("2020-11-01T00:00-07"),
  end: Date.parse("2020-12-01T00:00-08"),
  name: "Mission Bit 4th Annual Gala",
  goalDollars: 100000,
};

export default fundraisingGoal;
