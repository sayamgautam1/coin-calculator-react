import { getCoins } from "./coins";

describe("coins", () => {
  it("runs", () => {
    const denominations = getCoins(1023);
    expect(denominations).toEqual(
      expect.objectContaining({
        "1c": 1,
        "2c": 1,
        "20c": 1,
        "2d": 5,
      })
    );
  });
  it("Amount with Only Smallest Coin - 5 Cents", () => {
    const denominations = getCoins(5);

    expect(denominations).toEqual(
      expect.objectContaining({
        "5c": 1,
      })
    );
  });
  it("Large Amount - 789 Dollars and 12 Cents", () => {
    const denominations = getCoins(78912);

    expect(denominations).toEqual(
      expect.objectContaining({
        "1c": 0,
        "2c": 1,
        "5c": 0,
        "10c": 1,
        "20c": 0,
        "50c": 0,
        "1d": 1,
        "2d": 394,
      })
    );
  });
  it("amount with various coins", () => {
    const denominations = getCoins(153);

    expect(denominations).toEqual(
      expect.objectContaining({
        "1c": 1,
        "2c": 1,
        "5c": 0,
        "10c": 0,
        "20c": 0,
        "50c": 1,
        "1d": 1,
        "2d": 0,
      })
    );
  });
});
