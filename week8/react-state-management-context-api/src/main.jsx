import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterContextProvider from './context/CounterContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* We wrap our app component CounterContextProvider, which will provide the context values to all components written the aPP */}
  //   <CounterContextProvider>
  //     <App />
  //   </CounterContextProvider>
  // </StrictMode>,
  <CounterContextProvider>
      <App />
  </CounterContextProvider>
)
