import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import math.js

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Function to update the input
  const handleInput = (value) => {
    setInput(input + value);
  };

  // Function to evaluate the input expression using math.js
  const evaluateExpression = () => {
    try {
      const res = evaluate(input); // Use math.js to evaluate the expression
      setResult(res.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to clear the input
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div
      style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}
    >
      <h2>React Calculator</h2>
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "20px",
          marginBottom: "20px",
          textAlign: "right",
        }}
      />
      <div>{result}</div>
      <div>
        {/* Button grid for numbers and operators */}
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={evaluateExpression}>=</button>
        <button onClick={() => handleInput("/")}>/</button>
      </div>
    </div>
  );
};

export default App;
