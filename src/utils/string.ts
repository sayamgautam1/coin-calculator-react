export const parseAmtAsString = (strAmt: string): number => {
  let [dollarsStr, centsStr] = strAmt.split(".");
  let dollars = dollarsStr ? parseFloat(dollarsStr) : 0;
  let cents = centsStr ? parseFloat(centsStr) : 0;
  // Calculate the total amount in cents
  let totalCents = dollars * 100 + cents;

  // TODO: consider throwing an error instead of defaulting to 0 for non-numeric inputs
  return isNaN(totalCents) ? 0 : totalCents;
};
