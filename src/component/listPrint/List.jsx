import s from "./list.module.css"
export function List(){
    let i=0;
  let list =["apple","mango","orange","banana","coconut"]
  let lst = list.map((l)=> {return(<li>{l}</li>)})
  return(<div  className={`text-2xl t ${s.bg} h-screen border-2 border-green-500 rounded-full text-red-500 flex justify-center align-middle`}>
    <ol>{lst}</ol>
  </div>)
}