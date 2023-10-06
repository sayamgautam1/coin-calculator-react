import React, { useState } from "react";

const AmountInput = ({
  handleSubmit: handleChange,
}: {
  handleSubmit: (val: string) => void;
}) => {
  const [inputAmount, setInputAmount] = useState<string>();
  return (
    <div>
      <h1 className="text-center">Coin Calculator</h1>
      <div className="form-group text-center">
        <label htmlFor="total-amount">Please enter your amount</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            id="total-amount"
            name="coin-input"
            type="number"
            placeholder="amount in dollars and cents"
            className="form-control"
            onChange={(e) => setInputAmount(e.target.value)}
          />
        </div>
      </div>

      <button
        id="calculate-change"
        type="submit"
        className="btn btn-outline-success btn-lg btn-block"
        onClick={() => inputAmount && handleChange(inputAmount)}
      >
        Calculate
      </button>
      <hr />
    </div>
  );
};

export default AmountInput;
