import './App.css';
import Test1 from './components/Test1';
import Test2 from './components/Test2';

function App() {
  //state
  //return a react element
  return (
    <div className='text-center border-2 p-24 bg-gray-100'>
      <h1 className='text-5xl text-blue-400'>Welcome to React</h1>
      <Test1 message="Good morning" time="20"/>
      <Test1 message="Good Afternoon"/>
      <Test1 message="Good Evening" />
      <Test2 />
    </div>
  )
}
export default App;