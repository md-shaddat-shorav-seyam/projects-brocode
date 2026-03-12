import { useState } from "react";

export function Count() {
  const [c, setC] = useState(0);

  return (
    <div className="h-150 w-120 rounded-1xl shadow-2xl flex flex-col justify-center items-center bg-[#F6FBEA]">
      <h1 className="text-9xl">{c}</h1>
      <div className="flex flex-row gap-6 mt-7  ">
        
        <button onClick={()=>setC(c-1)} className="cursor-pointer text-2xl border-b-emerald-600 bg-[#DCEFA9] rounded-2xl p-3 hover:bg-[#CBE77E] hover:scale-110 ">Decrement</button>
        <button onClick={()=>setC(0)} className="cursor-pointer  text-2xl border-b-emerald-600 bg-[#DCEFA9] rounded-2xl p-3 hover:bg-[#CBE77E] hover:scale-110 ">Reset</button>
        <button onClick={()=>setC(c+1)} className="cursor-pointer  text-2xl border-b-emerald-600 bg-[#DCEFA9] rounded-2xl p-3 hover:bg-[#CBE77E] hover:scale-110 ">Increment</button>
      </div>
    </div>
  );
}
