import React, { useState } from 'react'
import { CounterContext } from './counterContext';

function CounterContextProvider({ children }) {
    //State
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);
    //function to modify 
    const changeCounter = () => {
      setCounter1(counter1+1);
    }
    const changeCounter2 = () => {
      setCounter2(counter2+1);
    }

  return (
    //value contains js object
    <CounterContext.Provider value={{counter1, changeCounter, counter2, changeCounter2}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider;
