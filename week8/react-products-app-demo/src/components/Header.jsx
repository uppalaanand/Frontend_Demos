import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-500 p-1 text-2xl">
      <img width="100px" className='rounded-4xl' src="https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_user_personalization&w=740&q=80" alt="" />
      <ul className='flex gap-10'>
        <li>
          <NavLink to='/' className={({isActive}) =>isActive?"text-orange-400":""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="products" className={({isActive}) =>isActive?"text-orange-400":""}>Products</NavLink>
        </li>
        <li>
          <NavLink to="contact" className={({isActive}) =>isActive?"text-orange-400":""}>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
