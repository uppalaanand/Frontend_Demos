import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

function RootLayout() {
  return (
    <div>
      <Header />
      {/* placeholder */}
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout
