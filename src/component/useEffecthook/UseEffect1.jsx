import { useEffect, useState } from "react";

// useEffect( function , [ dependencies ] )

// useEffect( () => {}  )// runs after every rerender
// useEffect( () => {} ,[ ] )// runs only on mount
// useEffect( () => {} ,[ value ] )// runs on mount + when value changes

var x = 0,
  y = 0;

export function UseEffect1() {
  const [count, setCount] = useState(0);
  const [b, setB] = useState(true);
  const [color, setColor] = useState("red");

  useEffect(() => {
    document.title = `${count} times ${color}`;
    // setB(c=>c+1)
    y++;
    console.log(y);
  },[color,count]);

  const add = () => {
    setCount((c) => c + 1);
  };
  const reset = () => {
    setCount((c) => 0);
  };
  const dec = () => {
    setCount((c) => c - 1);
  };

  console.log(`i am printing ${x}`); 
  x++;

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-900 h-screen w-screen text-white ">
        <div className="text-4xl">{count}</div>
        <div className="flex flex-row gap-3 text-3xl">
          <button
            onClick={() => {
              add();
            }}
            className="p-3 m-1 mt-3 border-2 rounded-4xl hover:bg-amber-700 hover:scale-125"
          >
            add
          </button>
          <button
            onClick={() => {
              reset();
            }}
            className="p-3 m-1 mt-3 border-2 rounded-4xl hover:bg-amber-700 hover:scale-125"
          >
            reset
          </button>
          <button
            onClick={() => {
              dec();
            }}
            className="p-3 m-1 mt-3 border-2 rounded-4xl hover:bg-amber-700 hover:scale-125"
          >
            dec
          </button>

          <button
          
          onClick={()=>{
              setColor(c=>(c=="green"? "red":"green"))
          }}
          className="p-3 m-1 mt-3 border-2 rounded-4xl hover:bg-amber-700 hover:scale-125"
          style={{backgroundColor:color}}
          >
            color
          </button>
        </div>
      </div>
    </>
  );
}
