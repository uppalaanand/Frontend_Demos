import React, { useState } from 'react'
import { CounterContext } from './counterContext';

function CounterContextProvider({ children }) {
    //State
    const [counter1, setCounter1] = useState(1);
    //function to modify 
    const changeCounter = () => {
        setCounter1(counter1+1);
    }

  return (
    //value contains js object
    <CounterContext.Provider value={{counter1, changeCounter}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider;
