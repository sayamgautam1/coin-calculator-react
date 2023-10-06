import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AmountInput from "./components/AmountInput";
import CoinsDisplay from "./components/CoinsDisplay";
import { Denominations, getCoins } from "./utils/coins";
import { parseAmtAsString } from "./utils/string";

function App() {
  const [coins, setCoins] = useState<Denominations>();

  const handleSubmit = (value: string) => {
    const amtInNumber = parseAmtAsString(value);
    const coins = getCoins(amtInNumber);
    setCoins(coins);
  };

  return (
    <div className="App">
      <AmountInput handleSubmit={handleSubmit} />
      {coins && <CoinsDisplay coins={coins} />}
    </div>
  );
}

export default App;
