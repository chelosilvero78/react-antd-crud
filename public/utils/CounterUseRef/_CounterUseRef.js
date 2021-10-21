import React, { useState, useEffect, useRef} from 'react'
import "./CounterUseRef.css";

function Counter({ value = 1 }) {
  const [count, setCount]=useState(value);
  const prevCountRef=useRef();
  useEffect(()=>{
    prevCountRef.current=count;
  })
  const prevCount=prevCountRef.current;


  // handleAdd
  const handleAdd = () => {
    setCount(count + 1);
    // setCounter( (c) => c + 1 );
  }
  const handleSubtract = () => setCount( count - 1);
  const handleReset = () => setCount( value );

  return (
    <div className="render-div">
      <h1> Contador-masr </h1>
      <hr/>
      {/* <p>Now: {count}, before {prevCount}</p>; */}
      <h3>
        Actual:<span className="render-now">
          {count}</span>,  
        Anterior:<span className="render-before">
          {prevCount}</span>
      </h3>

      <button onClick={ handleSubtract }> -1 </button>
      <button onClick={ handleReset }> Reset </button>
      <button onClick={ handleAdd }> +1 </button>
    </div>
  ) 
  
}

export default Counter;
