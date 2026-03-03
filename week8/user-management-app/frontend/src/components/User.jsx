import React from 'react'
import { useLocation } from 'react-router'

function User() {
    const {state} = useLocation();
  return (
   <div className='flex flex-col mt-14 sm:flex-row justify-between'>
      <div className='w-3/5 p-10 sm:p-10'>
        <p className='text-2xl mb-10'>{state?.user?.name}</p>
        <p className='mb-10'>{state?.user?.email}</p>
      </div>
    </div>
  )
}

export default User
