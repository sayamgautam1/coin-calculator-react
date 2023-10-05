export type Denominations = {
  "1c": number;
  "2c": number;
  "5c": number;
  "10c": number;
  "20c": number;
  "50c": number;
  "1s": number;
  "2s": number;
};

export const getCoins = (amt: number): Denominations => {
  // All available coin values in cents
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  // Initialize an object to store the count of each coin
  const changeByCoin = {};

  // Iterate through the available coins
  for (const coinValue of coins) {
    // Calculate the number of coins of this value that can be used
    const count = Math.floor(amt / coinValue);

    // Store the count, even if it's zero
    if (coinValue >= 100) {
      changeByCoin[coinValue / 100 + "s"] = count;
    } else {
      changeByCoin[coinValue + "c"] = count;
    }

    // Update the total amount
    amt -= count * coinValue;
  }

  return changeByCoin;
};
