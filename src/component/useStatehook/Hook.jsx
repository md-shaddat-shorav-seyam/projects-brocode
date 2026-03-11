import { useState } from "react"

export function Hook(){
     const[name,setName] =useState("g");
     const[age,setAge] =useState(10);
          const[emp,setemp] =useState(true);

    const updateName =()=>{
        setName("seyam")
     };
     const incAge=()=>{
        setAge(age +1 )
     }
     const togEmp=()=>{
        if(emp){
            setemp(false)
        }
        else{
            setemp(true)
        }
     }
    return(<div>
        <p>Name : {name}</p>
        <button onClick={updateName}>set Name</button>
         <p>Age : {age}</p>
        <button onClick={incAge}>set age</button>
        <p>employed : {emp ? "yes":"No"}</p>
        <button onClick={togEmp}>set emp</button>
    </div>);
}