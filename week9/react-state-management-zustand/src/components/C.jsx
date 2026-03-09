import React, { useState } from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'
import {useTest} from '../store/testStore'

function C() {
  //Get state from Zustand state
  // const {y, incrementY, decrementY} = useTest() //{x:10,y:20}
  const y = useTest(state => state.y);
  const incrementY = useTest(state => state.incrementY);
  console.log(y);

  const {counter1, changeCounter} = useContext(CounterContext);
  console.log("Component C");
  return (
    <div className='text-center shadow-2xl p-20'>
      <h1 className='text-3xl font-bold mb-5'>Component A</h1>
      <h2 className='text-2xl font-bold mb-5'>Counter: {counter1}</h2>
      <button onClick={changeCounter} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter</button>
      <h2 className='text-2xl font-bold mb-5'>Y: {y}</h2>
      <button onClick={incrementY} className='bg-blue-500 text-white px-4 py-2 rounded'>Inc Y</button>
    </div>
  )
}

export default C
