import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/counterContext.js';

function A() {
  let {counter1, changeCounter} = useContext(CounterContext);
  console.log(counter1);

  return (
    <div className='text-center shadow-2xl p-20'>
      <h1 className='text-3xl font-bold mb-5'>Component A</h1>
      <h2 className='text-2xl font-bold mb-5'>Counter: {counter1}</h2>
      <button onClick={changeCounter} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter</button>
    </div>
  )
}

export default A
