import { useEffect, useState } from "react"

export function EffGptP2(){
const [w, setW] = useState({height: 700, width:400})
  
useEffect(()=>{

    console.log(document);
    

},[w])
    return(<>
    
    <div className="h-screen w-screen bg-gray-900 text-amber-50 flex flex-col justify-center items-center ">
          <p className="text-5xl">sizes</p>
          <p>height: {w.height}</p>
            <p>width: {w.width}</p>
    </div>
    </>)
}