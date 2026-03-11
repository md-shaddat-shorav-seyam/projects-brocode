export function ListObj(p){
    //    const fruits=[{id:1, name:"apple",calories :95},
    //     {id:2, name:"orange",calories :45},
    //     {id:3, name:"banana",calories :105},
    //     {id:4, name:"coconut",calories :159},
    //     {id:5, name:"pineapple",calories :37},

    //    ]
     //fruits.sort((a,b)=>a.calories-b.calories)
    //  fruits.sort((a,b)=>a.name.localeCompare(b.name))




        const fruits = p.items
//    const lowCal = fruits.filter((f)=>f.calories>100)
      


  let fruit = fruits.map((f)=>{return(
    <li key={f.id}>{f.name} have {f.calories} calories </li>
  )})
  return (<>
     <h2 className="font-medium text-red-700">{p.catagory}</h2>
  <ol>{fruit}</ol></>)
}