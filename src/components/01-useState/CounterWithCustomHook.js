import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter(100);



    return (
        <>
          <h1>Counter with hook:{state} </h1>
          <hr/>

          <button onClick={()=> increment(2)} className="btn"> +1</button>
          <button onClick={()=> decrement(2)} className="btn"> -1</button>
          <button onClick={reset} className="btn"> reset</button>
        </>
    )
}
