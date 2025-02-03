import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [error, setError] = useState("");

  const buttonStyle =
    "bg-gray-200 hover:bg-gray-300 p-4 rounded-lg text-xl font-semibold";
  const operatorStyle = "bg-orange-500 text-white hover:bg-orange-600";
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-4">
        <input
          type="text"
          value={display}
          readOnly
          className="w-full text-right text-3xl p-2 bg-gray-100 rounded-lg"
        />
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      </div>
      <div className=" grid grid-cols-4 gap-4">
        {[7, 8, 9, "÷"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn === "÷" ? "/" : btn)}
            className={`${buttonStyle} ${btn === "÷" ? operatorStyle : ""}`}
          >
            {btn}
          </button>
        ))}

        {[4, 5, 6, "x"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn === "x" ? "*" : btn)}
            className={`${buttonStyle} ${btn === "x" ? operatorStyle : ""}`}
          >
            {btn}
          </button>
        ))}
        {[1, 2, 3, "-"].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className={`${buttonStyle} ${btn === "-" ? operatorStyle : ""}`}
          >
            {btn}
          </button>
        ))}
        {[0, ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={
              btn === "=" ? "calculateResult" : () => handleButtonClick(btn)
            }
            className={`${buttonStyle} ${
              ["+", "="].includes(btn) ? operatorStyle : ""
            }`}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={"clearDisplay"}
          className="col-span-4 bg-red-500 text-white hover:bg-red-600 p-6 rounded-lg text-xl font-bold"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
