import { useState } from "react"

// this accepts two props: initialValue and step
function Counter({ initialValue, step }) {
  // set a stateful component that is count: takes upon setting it up with an initial value (initialValue) 
  // and has a setCount method to set the count variable: (since the count variable is readOnly)
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      {/* this code reads the value of count and displays it */}
      <p>Il y a {count} secondes</p>
      {/* this code makes a button that takes in a callback function to update the state of the count variable to trigger a rerender */}
      <button onClick={
        () => {
          // we can use setCount(count + 1); instead, because the p in this context is the previousState of the variable, thats why it also works! 
          setCount(p => {
            return p + step; 
          })
        }
      }>increment</button>
      {/* The reset button takes the count and sets it to the initial value specified by the prop */}
      <button onClick={
        () => {
          setCount(initialValue);
        }
      }>reset</button>
    </div>
  )
}
export default Counter
