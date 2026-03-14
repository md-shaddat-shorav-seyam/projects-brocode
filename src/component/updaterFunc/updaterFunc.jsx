import { useState } from "react";

export function UpdaterFunc() {

       const [count, setcount] =useState(1)
       
       const dec= e=>{
                setcount(count - 1)

       }

       const rst= e=>{
             setcount(0)
        
       }


       const inc= e=>{
                // setcount(count + 1)  we can not do this for two +++ time it donot update second time
                setcount(x => x+1)
                                setcount(x => x+1)

       }


    return ( <> 
    
    <div className="h-screen w-screen bg-gray-600 flex flex-col items-center justify-center ">
        
            <p className="text-8xl">{count}</p>
            <div className="flex gap-8 text-3xl mt-9">
                
                <button className="bg-yellow-800 rounded-4xl p-5 hover:bg-yellow-500  " onClick={dec}>decrement</button>
                <button className="bg-yellow-800 rounded-4xl p-5 hover:bg-yellow-500  " onClick={rst} >reset</button>
                <button className="bg-yellow-800 rounded-4xl p-5 hover:bg-yellow-500  " onClick={inc}>increment</button>

            
            
            
            </div>

    </div>
    
    
    
     </>);
}