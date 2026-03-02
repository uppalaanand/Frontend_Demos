import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import B from './components/B'
import C from './components/C'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <A />
      <B />
      <C />
    </div>
  )
}

export default App
