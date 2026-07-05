import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
export function Mytodo() {
  let sww = (e1, e2) => {console.log("i am printing twice") ;return([e2, e1])}; // that is why function is wappping twice
  const [text, setText] = useState("");
  const [arr, setArr] = useState(["i am todo", "ia"]);
  return (
    <>
      <div className="h-screen w-screen bg-gray-950 text-white  flex flex-col justify-center items-center ">
        <div>
          <input
            type="text"
            placeholder="enter todos"
            onChange={(e) => setText(e.target.value)}
            className="border-2 rounded-4xl p-5"
          />
          <button
            onClick={() => {
              setArr((e) => [...e, text]);
            }}
            className="ml-7 border-2 p-3 rounded-2xl hover:bg-amber-200 hover:text-black"
          >
            Add
          </button>
        </div>

        <ul className="m-7 ">
          {arr.map((e, i) => (
            <li
              className="border-2 w-200 h-20 p-6 flex flex-row justify-between m-2"
              key={i}
            >
              <p> {e} </p>{" "}
              <span className="flex text-4xl gap-4">
                <FaAngleUp
                  onClick={() => {
                    console.log("clicked up", i);
                    if (i > 0) {
                    setArr((el) => {
                      let elup = [...el]; // el is non mutable & non reference 
                    [elup[i], elup[i-1]] = [elup[i-1], elup[i]];
                   // [elup[i], elup[i-1]] = sww( elup[i-1], elup[i]); // 
                      console.log( el,elup);//if you see this 
                      return elup;

                    }); 
                }
                  }}
                />
                <MdDelete
                  onClick={() => {
                    setArr((a) => a.filter((_, ind) => ind !== i));
                  }}
                  color="red"
                />
                <FaAngleDown  onClick={() => {
                    console.log("clicked up", i);
                    if (i < arr.length -1) {
                    setArr((el) => {
                      let elup = [...el]; // el is non mutable & non reference 
                    [elup[i], elup[i+1]] = [elup[i+1], elup[i]];
                   // [elup[i], elup[i-1]] = sww( elup[i-1], elup[i]); // 
                      console.log( el,elup);//if you see this 
                      return elup;

                    }); 
                }
                  }} />{" "}
              </span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
