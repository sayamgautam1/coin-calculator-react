import { parseAmtAsString } from "./string";
describe("Coin change calculator", () => {
  describe("parseInputToCents", () => {
    it("parses input amount as string to cent values", () => {
      const cents = parseAmtAsString("10.24");
      expect(cents).toBe(1024);
    });

    it("parses zero amount correctly", () => {
      const cents = parseAmtAsString("0");
      expect(cents).toBe(0);
    });

    it("parses non-numeric correctly", () => {
      const cents = parseAmtAsString("abc");
      expect(cents).toBe(0);
    });
  });
});
