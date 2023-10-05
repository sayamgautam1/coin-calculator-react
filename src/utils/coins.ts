export type Denominations = {
  "1c": number;
  "2c": number;
  "2d": number;
  "10c": number;
};
export const getCoins = (amt: number): Denominations => {
  return {
    "1c": 10,
    "2c": 1,
    "10c": 0,
    "2d": 2,
  };
};
