import React from 'react'
import {NavLink, Outlet} from 'react-router'

function Technology() {
  return (
    <div className='mt-10'>
      <ul className='flex justify-around'>
        <li>
          <NavLink to="java" >Java</NavLink>
        </li>
        <li>
          <NavLink to="nodejs" >NodeJs</NavLink>
        </li>
        <li>
          <NavLink to="vue">Vue</NavLink>
        </li>
      </ul>

      {/* placeholder for childeren of Technology */}
      <Outlet />
    </div>
  )
}

export default Technology
