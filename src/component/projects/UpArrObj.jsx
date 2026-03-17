import { useState } from "react"

export function UpArrObj (){

 const [list,setList] =useState([{year: new Date(2026,0,1), brand:"ford" ,model:"mustang" },
                                {year: new Date(2027,0,1), brand:"mc" ,model:"sm" }])

    const[y,setY]=useState()
     const[b,setB]=useState()
      const[m,setM]=useState()
            const[t,setT]=useState("List of car")

return(<>
  <div className="h-screen w-screen bg-gray-950 text-white flex flex-col justify-center items-center ">



                <h1> {t}</h1>
                <ol>
                    {list.map((l,i)=>(<li key={i} onClick={()=>{setList(c =>c.filter((_,ind)=>ind !== i))}} >{i+1}. {(l.year.getFullYear())},{l.brand},{l.model}</li>))}
                </ol>
                <div className=" flex flex-col justify-center items-center m-9 gap-5">


            <input type="date" onChange={(e)=>setY(()=> new Date( e.target.value))} />
            <input type="text" placeholder="Enter brand name" onChange={(e)=>setB(()=>e.target.value)}/>
            <input type="text" placeholder="Enter model name" onChange={(e)=>setM(()=>e.target.value) }/>
                <button className="border-4 hover:border-amber-400 rounded-4xl border-white p-5" type="button" onClick={()=>{ if(y) {setList(l=>([...l,{year: y, brand:b ,model: m}]))} else {setT(e=>"enter date" )} }  }>Add Car</button>

                </div>

  </div>
</>)
}