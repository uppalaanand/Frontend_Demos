import './App.css'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import UserUpdate1 from './components/UserUpdate1'
 

function App() {
  console.log("Hello")
  return (
    <div className='flex'>
      <A />
      <B />
      <C />
      <UserUpdate1 />
    </div>
  )
}

export default App
