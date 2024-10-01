import { useEffect, useState } from "react"


function UseState(){
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    const increaseCount = () =>{
       setCount(count+1)
    }
    const decreaseCount = () =>{
       setCount(count-1)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <h1>{count2}</h1>
        </>
    )
} 
export default UseState