import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'
import { useTest } from '../store/testStore'

function B() {
  const x = useTest((state) => state.x);
  const incrementX = useTest(state => state.incrementX);
  const incrementXByValue = useTest(state => state.incrementXByValue);


  const {counter1, changeCounter, counter2, changeCounter2} = useContext(CounterContext);
  console.log("Component B");
  return (
    <div className='text-center shadow-2xl p-20'>
      <h1 className='text-3xl font-bold mb-5'>Component A</h1>
      <h2 className='text-2xl font-bold mb-5'>Counter1: {counter1}</h2>
      <h2 className='text-2xl font-bold mb-5'>Counter2: {counter2}</h2>
      <div className='flex gap-2'>
        <button onClick={changeCounter} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter1</button>
        <button onClick={changeCounter2} className='bg-blue-500 text-white px-4 py-2 rounded'>Change Counter2</button>
        <h2 className='text-2xl font-bold mb-5'>X: {x}</h2>
        <button onClick={incrementX} className='bg-orange-500 text-white px-4 py-2 rounded'>Inc X</button>
        <button onClick={() => incrementXByValue(200)} className='bg-orange-500 text-white px-4 py-2 rounded'>Inc X</button>
      </div>
    </div>
  )
}

export default B
