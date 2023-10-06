export const parseAmtAsString = (strAmt: string): number => {
  let [dollarsStr, centsStr] = strAmt.split(".");
  let dollars = dollarsStr ? parseInt(dollarsStr) : 0;
  let cents = centsStr ? parseInt(centsStr) : 0;

  // If centsStr has only one digit, assume it's in tenths of a cent
  if (centsStr && centsStr.length === 1) {
    cents *= 10;
  }
  // Calculate the total amount in cents
  let totalCents = dollars * 100 + cents;

  // TODO: consider throwing an error instead of defaulting to 0 for non-numeric inputs
  return isNaN(totalCents) ? 0 : totalCents;
};
