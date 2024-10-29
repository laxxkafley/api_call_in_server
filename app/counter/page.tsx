'use client'
import {useState} from "react"


export default function Counter(){
    const[num,setNum  ]=useState(1)
  

    function add(){
        
        setNum(num+1)
        console.log("num", num)
        
    }
    function minus(){
        setNum(num-1)
        console.log('num', num)
    }
    return(<>
    <h1>Counter: {num} </h1>
    <button
    className="border-2 border-black w-5 h-7" onClick={ add}>
    
    +
    </button>
    <div> <button
    className="border-2 border-black w-5 h-7" onClick={ minus}>
     {/* onClick={()=>{setNum-1}} */}
    -
    </button></div>
   
    
   
    </>
    
)



}