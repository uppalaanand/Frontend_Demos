import React from 'react'
import { useContext } from 'react';
import { CounterContext } from '../context/counterContext.js';
import { UserContext } from '../context/UserContext.js';

function A() {
  let {counter1, changeCounter, counter2, changeCounter2} = useContext(CounterContext);
  let {user, changeName} = useContext(UserContext);
  console.log(counter1);
  console.log("Component A");

  return (
    <div className='text-center shadow-2xl p-20'>
      <h1 className='text-3xl font-bold mb-5'>Component A</h1>
      <h2 className='text-2xl font-bold mb-5'>Counter1: {counter1}</h2>
      <h2 className='text-2xl font-bold mb-5'>Counter2: {counter2}</h2>
      <h2>{user.name}</h2>
      <div className='flex gap-2'>
        <button onClick={changeCounter} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter1</button>
        <button onClick={changeCounter2} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter2</button>
      </div>
    </div>
  )
}

export default A
