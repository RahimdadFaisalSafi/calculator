import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  return (
    <div>
      <div>
        <input type="text" value={display} readOnly />
      </div>
      <div>
        {[7, 8, 9, "÷"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn === "÷" ? "/" : btn)}
          >
            {btn}
          </button>
        ))}

        {[4, 5, 6, "x"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn === "x" ? "*" : btn)}
          >
            {btn}
          </button>
        ))}
        {[1, 2, 3, "-"].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
        {[0, ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={btn === '=' ? calculateResult : () => handleButtonClick(btn)}
          >{btn}</button>
        ))}
        <button onClick={clearDisplay}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
