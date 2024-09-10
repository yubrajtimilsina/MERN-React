import { useEffect, useState } from "react"


function LearninguseEffect(){
    // useEffect(()=>{
    //     console.log("hello this is useeffect")

    // },[])

    
    const [count,setCount] = useState(1)
    const [like,setLike] = useState(1)

    const increaseCount =()=>{
        setCount(count+1)
    }
    const decreaseCount =()=>{
        setCount(count-1)
    }
    
    useEffect(()=>{
        console.log('haha')
    },[count])

    useEffect(()=>{
        console.log("its third type of useeffect" )
    })


    return (
        <>
        <h1> {count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <h2>like :{like}</h2>
        <button>like</button>
        </>
    )
}

export default LearninguseEffect