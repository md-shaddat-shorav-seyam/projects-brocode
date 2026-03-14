
import './App.css'
import { Button } from './component/button/Button'
import { Con } from './component/conditionalRender/Con'
import { FilDiv } from './component/FilDiv/FilDiv'
import { List } from './component/listPrint/List'
import { ListObj } from './component/listPrint/ListObj'
import { OnChangeFunc } from './component/onchange/OnChangeFunc'
import { OnClick } from './component/onClick/OnClick'
import { ColorPicker } from './component/projects/ClolorPicker'
import { Student } from './component/student/Student'
import { Slider } from './component/text-slider-scroll/Slider'
import { Count } from './component/useStatehook/Count'
import { Hook } from './component/useStatehook/Hook'

function App() {
   
     const fruits=[{id:1, name:"apple",calories :95},
    {id:2, name:"orange",calories :45},
    {id:3, name:"banana",calories :105},
    {id:4, name:"coconut",calories :159},
    {id:5, name:"pineapple",calories :37}

   ]
        const veg=[{id:6, name:"carrot",calories :95},
    {id:7, name:"coriender",calories :45},
    {id:8, name:"lemon",calories :105},
    {id:9, name:"lip",calories :159},
    {id:10, name:"caa",calories :37}]

  return (
    <>
 {/* <Button name ="seyam"/>
 <Student name ="seyam" age="20" isStudent ={false}/>
   <Con login /> */}
   

{/* <List/> */}



      {/* {fruits.length>0 ? <ListObj items={fruits} catagory="fruit"/> : null} */}
  {/* <ListObj items={fruits} catagory="fruit"/>  */}


      {/* {fruits.length>0 ? <ListObj items={veg} catagory="vegitable"/> : null} */}
  {/* <ListObj items={veg} catagory="vegitable"/>  */}
    

{/* <OnClick/> */}


    {/* <Hook/> */}




{/* <Count/> */}


      {/* <OnChangeFunc/> */}

  {/* <ColorPicker/> */}






    </>
  )
}

export default App
