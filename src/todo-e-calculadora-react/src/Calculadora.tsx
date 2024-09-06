import { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (button: string) => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result) + "");
    } catch (e) {
      setResult("error");
    }
  };

  const reset = () => {
    setResult("");
  };

  return (
    <div>
      <div className="component-display">
        <div>{result}</div>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
