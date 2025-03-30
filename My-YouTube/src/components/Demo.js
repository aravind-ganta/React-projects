import React, { useState } from "react";
import { findNthPrime } from "../utils/helper";
//useMemo()
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  console.log("text");
  const prime = findNthPrime(text);
  return (
    <div
      className={
        "col-span-11 m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && "text-red-600")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
