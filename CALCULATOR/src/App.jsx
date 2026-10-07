import { useState } from "react";
import Display from "./components/Display.jsx";
import Button from "./components/Button.jsx";
import { calculate } from "./utils/calculate.js";

const KEYS = [
  { label: "Clear", wide: true }, "Delete", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  { label: "0", wide: true }, ".", "=",
];

function App() {
  const [expr, setExpr] = useState("");

  const handleClick = (label) => {
    if (label === "Clear") setExpr("");
    else if (label === "Delete") setExpr(expr === "Error" ? "" : expr.slice(0, -1));
    else if (label === "=") {
      if (expr) setExpr(calculate(expr));
    } else setExpr((expr === "Error" ? "" : expr) + label);
  };

  return (
    <div id="calculator">
      <Display value={expr || "0"} />
      <div className="grid">
        {KEYS.map((k) => {
          const item = typeof k === "string" ? { label: k } : k;
          return (
            <Button
              key={item.label}
              label={item.label}
              wide={item.wide}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
