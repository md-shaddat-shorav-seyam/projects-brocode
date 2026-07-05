import { useEffect } from "react"
import { useState } from "react"

export function EffGptP1(){
    
    const [timee,SetTimee] = useState(new Date())
    
useEffect(()=>{
    const int1 = setInterval(()=>{ SetTimee(new Date)},1000)
    return(()=>{
         clearInterval(int1)
    })
},[])

    return(<>
    
    <div className="bg-gray-900 h-screen w-screen flex flex-col justify-center items-center">
              <span className="text-amber-50 text-3xl m-5 font-extrabold">parc 1</span>
            <div className="bg-amber-600 h-50 w-50 text-blue-950">{timee.toLocaleTimeString()}</div>

    </div>
    </>)
}
