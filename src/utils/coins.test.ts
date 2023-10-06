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
  it("runs", () => {
    const denominations = getCoins(5);

    expect(denominations).toEqual(
      expect.objectContaining({
        "5c": 1,
      })
    );
  });
});
