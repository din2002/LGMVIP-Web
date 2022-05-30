import React, { useState } from "react";
import Display from "./Display";
import Keys from "./Keys";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("0");
  };
  return (
    <div className="calculator">
      <Display
        calc={calc}
        result={result}
        clear={clear}
        deleteLast={deleteLast}
      ></Display>
      <Keys
        calc={calc}
        result={result}
        updateCalc={updateCalc}
        calculate={calculate}
      ></Keys>
    </div>
  );
}
