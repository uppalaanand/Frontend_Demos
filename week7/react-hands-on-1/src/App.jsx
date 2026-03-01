import './App.css'
import FormDisplay from './components/FormDisplay'
import Products from './components/Products'

function App() {

  return (
    <div className='bg-gray-400 flex flex-col items-center'>
      <h1 className='text-3xl text-red-600'>Hello World</h1>
      {/* <Products /> */}
      <FormDisplay />
    </div>
  )
}

export default App
