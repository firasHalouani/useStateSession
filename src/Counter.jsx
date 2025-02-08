import { useState } from "react"

function Counter({initialValue,step}){
    const [count,setCount] = useState(initialValue);

    return (
        <div>
            <p>Il y a {count} secondes</p>
            <button onClick={
                ()=>{
                    setCount(p=>{
                        return p+step;
                    })
                }
            }>increment</button>
            <button onClick={
                ()=>{
                    setCount(initialValue);
                }
            }>reset</button>            
        </div>
    )
} 
export default Counter