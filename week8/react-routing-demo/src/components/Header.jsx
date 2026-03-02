import React from 'react'
import { NavLink } from 'react-router'
import image  from '../assets/image.png'

function Header() {
  return (
    <div className='flex justify-between items-center px-10 bg-gray-500 p-2'>
      <img src={image} alt="" className='w-15'/>
      <nav>
        <ul className='flex gap-10'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies">Technology</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
