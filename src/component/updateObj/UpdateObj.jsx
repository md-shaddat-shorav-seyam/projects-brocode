import { useState } from "react"

export function UpdateObj(){

     const [objj, sobjj] = useState({ year: 2024, brand: "ford", model: "mustang" })

        return(
            <div>
                <p>your fav car: {objj.year} {objj.brand} {objj.model}</p>
                <p>hi</p>
                <input
                    type="number"
                    value={objj.year}
                    onChange={(e) => sobjj( x=>( { ...x, year: Number(e.target.value) }))}
                />
                <input type="text"
                    value={objj.brand}
                    onChange={e=>sobjj(  x=>( {...x, brand : e.target.value }))}
                />
                <input type="text"
                    value={objj.model}
                    onChange={e=>sobjj(  x=>(  {...x, model : e.target.value }))}
                />
            </div>
        )
}