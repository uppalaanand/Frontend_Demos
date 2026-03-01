import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';
import StateDemo from './components/StateDemo';
import FormDemo from './components/FormDemo';
import TaskManager from './components/TaskManager';
import SideEffectsUseEffect from './components/SideEffectsUseEffect.jsx';

function App() {
  //state
  //return a react element
  return (
    <div className='text-center border-2 p-24 bg-gray-100'>
      {/* <h1 className='text-5xl '>Welcome To App</h1> */}
      {/* State Demo */}
      {/* <StateDemo /> */}
      {/* Form Demo */}
      {/* <FormDemo /> */}
      {/* Task Management System */}
      {/* <TaskManager /> */}
      <SideEffectsUseEffect />
    </div>
  )
}
export default App;