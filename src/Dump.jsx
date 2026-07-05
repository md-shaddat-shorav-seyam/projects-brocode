import { useState } from "react";

let d = (e) => {
  e += 1;
  console.log("i am");// this run twice
  return e;
};

export function Dump() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div>{value}</div>
        <button
          onClick={() => {
            setValue((e) => {
              let t = e;
              t = d(t);
              return t;
            });
          }}
        >
          update
        </button>
      </div>
    </>
  );
}
