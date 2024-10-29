// 'use client'


// import { useState, useEffect } from "react"


// export default function MyEffect() {

//     const [a, setA] = useState("a")
//     const [b, setB] = useState("b")

//     useEffect( () => {
//         console.log("In side useEffect")
//         return () => console.log("Clean up ...")
//     } , []  )
  
//     useEffect( () => {
//         console.log("In side useEffect")
//         return () => console.log("Clean up ...")
//     } , []  )

//     console.log("render")

  

//   return (
//     <div>
//         UseEffect: {a} | {b} <br /> <hr />
//         <button className="border-2 p-2 m-2" onClick={()=>setA("A")}>A</button>
//         <button className="border-2 p-2 m-2" onClick={()=>setA("Everything trash")}>a</button>
//         <button className="border-2 p-2 m-2" onClick={()=>setB("So pathetic")}>B</button>
//         <button className="border-2 p-2 m-2" onClick={()=>setB("life is good")}>b</button>
//     </div>
//   )
// }
// useEffect/page.tsx
'use client'

import { useEffect } from "react";

export default function UseEffectComponent() {
    useEffect(() => {
        // You can add any additional logic or effects here if needed
        console.log("UseEffectComponent mounted");
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-3xl text-purple-900 font-bold mb-6">Use Effect Example</h2>
            <p>This is a placeholder for the UseEffect component. You can expand upon it.</p>
        </div>
    );
}
