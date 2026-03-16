import { useState } from "react"




export function UpdateArray(){
     const fList = document.querySelector("#fList")

    const [list,setList] =useState(["apple","orange","banana"])
    return(<>
    <div className="bg-gray-900 h-screen w-screen flex flex-col justify-center items-center text-[#ffffff]">
       
       <div>

        <h1>List of food</h1>
        <ol>

        {list.map((e,i)=><li  onClick={e=>{setList(f=>f.filter((_,ind)=>ind !== i ))}}  key={i}> {i+1}. {e}</li>)}

        </ol>

       </div>
       
         <div>
            <input id="fList" type="text" className="bg-amber-100 text-black" placeholder="Enter food name"  />
            <button onClick={e=>{setList(el=>([...el,fList.value]))}} className="m-5 bg-amber-900 p-2 rounded-4xl hover:bg-amber-200">Add Food</button>
         </div>

    </div>
    
    
    </>)
}