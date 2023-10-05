import React from "react";

const AmountInput = () => {
  return (
    <div>
      <h1 className="text-center">Coin Calculator</h1>
      <div className="form-group text-center">
        <label htmlFor="total-amount">Please enter your amount</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            id="total-amount"
            type="number"
            placeholder="amount in dollars and cents"
            className="form-control"
          />
        </div>
      </div>

      <button
        id="calculate-change"
        type="submit"
        className="btn btn-outline-success btn-lg btn-block"
      >
        Calculate
      </button>
      <hr />
    </div>
  );
};

export default AmountInput;
