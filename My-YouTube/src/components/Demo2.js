import React, { useRef, useState } from "react";
// let vs State vs Ref
const Demo2 = () => {
  let x = 0;
  const [y,setY]= useState(0);
  const ref= useRef(0);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div className="">
        <button
        className="bg-green-100 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-l">let = {x}</span>
      </div>
      <div className="">
        <button
        className="bg-green-100 p-2 m-2"
          onClick={() => {
            setY(y+1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-l">State = {y}</span>
      </div>
      <div className="">
        <button
        className="bg-green-100 p-2 m-2"
          onClick={() => {
            ref.current=ref.current+1;
            console.log(ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-l">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
