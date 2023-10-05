export type Denominations = {
  "1c": number;
  "2c": number;
  "5c": number;
  "10c": number;
  "20c": number;
  "50c": number;
  "1d": number;
  "2d": number;
};
// All available coin values in cents
const coins = [200, 100, 50, 20, 10, 5, 2, 1];
export const getCoins = (amt: number): Denominations => {
  // Initialize an object to store the count of each coin
  const changeByCoin: Denominations = {
    "1c": 0,
    "2c": 0,
    "5c": 0,
    "10c": 0,
    "20c": 0,
    "50c": 0,
    "1d": 0,
    "2d": 0,
  };

  // Iterate through the available coins
  for (const coinValue of coins) {
    // Calculate the number of coins of this value that can be used
    const count = Math.floor(amt / coinValue);

    // Store the count, even if it's zero
    const key = (
      coinValue >= 100 ? coinValue / 100 + "d" : coinValue + "c"
    ) as keyof Denominations;
    changeByCoin[key] = count;

    // Update the total amount
    amt -= count * coinValue;
  }

  return changeByCoin;
};
