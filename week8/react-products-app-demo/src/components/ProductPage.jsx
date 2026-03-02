import React from 'react'
import { useLocation } from 'react-router'

function ProductPage() {
  const {state} = useLocation();
  console.log(state.product);

  return (
    <div className='flex flex-col mt-14 sm:flex-row justify-between'>
      <div className='w-2/5'>
        <img src={state?.product?.image} className='mt-10 w-96' alt="" />
      </div>
      <div className='w-3/5 p-10 sm:p-10'>
        <p className='text-2xl mb-10'>{state?.product?.title}</p>
        <p className='mb-10'>{state?.product?.description}</p>
        <p className='text-2xl mb-10'>{state?.product?.price}</p>
        <p className='text-2xl mb-10'>{state?.product?.category}</p>
      </div>
    </div>
  )
}

export default ProductPage
