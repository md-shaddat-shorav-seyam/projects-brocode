import { useState } from "react";

export function Count() {
  const [c, setC] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-amber-600">
      <h1 className="text-9xl">{c}</h1>
      <div className="flex flex-row gap-6 mt-7  ">
        
        <button onClick={()=>setC(c-1)} className="cursor-pointer text-2xl border-b-emerald-600 bg-emerald-500 rounded-4xl p-3 hover:bg-purple-600">Decrement</button>
        <button onClick={()=>setC(0)} className="cursor-pointer">Reset</button>
        <button onClick={()=>setC(c+1)} className="cursor-pointer">Increment</button>
      </div>
    </div>
  );
}
