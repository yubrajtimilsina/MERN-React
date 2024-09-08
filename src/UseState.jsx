import { useEffect } from "react"


function UseState(){
    var count = 2
    const increaseCount = () =>{
        count = count + 1
        console.log(count)
    }
    const decreaseCount = () =>{
        count =count - 1
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        </>
    )
}
export default UseState