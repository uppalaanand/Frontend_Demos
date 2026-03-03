import {Outlet} from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='mx-80'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
