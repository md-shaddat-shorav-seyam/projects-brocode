import { useState } from "react"

export function OnChangeFunc(){
    const [n,sn]=useState("/");

    const up=(v)=>{sn(v.target.value)}
    const [q,sq]=useState(1)
    const [s,ss]=useState();
    const [r,sr]=useState();
    return(<>
        <input value={n} className="h-30 w-50 bg-amber-400 rounded-4xl" onChange={up}/>
        <p className="mt-5 text-5xl h-20">{n}</p>
        <label htmlFor="quantity" className="text-3xl"> quantity : </label>
        <input  className="border-b-blue-950 bg-gray-400" type="number" name="quantity" id="" value={q} onChange={(e)=>sq(e.target.value)} max="100"/>
                <p className="mt-5 text-5xl h-20">{q}</p>


            <select onChange={(e)=>ss(e.target.value)} className="ml-50 mr-50" name="" id="">
                    <option value="sm">sm</option>
                    <option value="tv">tv</option>
                    <option value="lp">lp</option>
            </select>
                            <p className="mt-5 text-5xl h-20">{s}</p>


            <label htmlFor="rd-1">rd1</label>
            <input type="radio" name="rd" id="rd-1" onChange={(e)=>sr(e.target.value)} />

             <label htmlFor="rd-2">rd2</label>
            <input type="radio" name="rd" id="rd-2" />
          <p className="mt-5 text-5xl h-20">{r}</p>

        
    </>)
}