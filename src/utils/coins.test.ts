import { getCoins } from "./coins";

describe("coins", () => {
  it("runs", () => {
    expect(getCoins(1023)).toEqual({
      "1c": 10,
      "2c": 1,
      "10c": 0,
      "2d": 2,
    });
  });
});
