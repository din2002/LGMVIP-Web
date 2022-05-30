import React from "react";

export default function Display({ calc, result, clear, deleteLast }) {
  return (
    <div className="display_screen">
      <button onClick={deleteLast}>Del</button>
      <p>
        {result ? <span>({result})</span> : ""}&nbsp;
        {calc || "0"}
      </p>
      <button onClick={clear}>C</button>
    </div>
  );
}
