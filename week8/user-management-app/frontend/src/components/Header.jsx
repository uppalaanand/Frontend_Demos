import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between items-center px-10 bg-gray-500 p-2'>
      <img src="https://cdn.logojoy.com/wp-content/uploads/20220329171609/reddit-social-media-app-logo.png" width="90px" className='rounded-2xl' alt="Image" />
      <ul className='flex gap-10'>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="user-list">UserList</NavLink>
        </li>
        <li>
            <NavLink to="add-user">AddUser</NavLink>
        </li>
        <li>
            <NavLink to="user">User</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
