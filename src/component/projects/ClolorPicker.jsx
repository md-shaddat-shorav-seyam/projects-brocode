import { useState } from "react"

export function ColorPicker(){

    const[color,setColor] = useState("#ffffff")
    return(<div className="flex flex-col bg-gray-700 h-screen w-screen justify-center items-center"> 
                <h1 className="text-5xl mb-3 text-white ">color picker</h1>
    
                <div className={`h-50 w-50 rounded-3xl mt-7 flex flex-col justify-center items-center`} style={{backgroundColor : color}}>
                     <p>selected color :</p>
                     
                      <p  > {color} </p> 
                </div>

                <p className="mt-9 text-shadow-amber-50 bold " style={{ color: color}}> select  color : </p>
                <input onChange={(e)=>setColor(e.target.value)} type="color" value={color}></input>
    
    
    </div>)
}