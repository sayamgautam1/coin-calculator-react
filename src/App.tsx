import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AmountInput from "./components/AmountInput";
import CoinsDisplay from "./components/CoinsDisplay";

function App() {
  return (
    <div className="App">
      <AmountInput />
      <CoinsDisplay />
    </div>
  );
}

export default App;
