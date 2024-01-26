import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  
  const cartItems = useSelector(state => state.cart.items)
 const numberOfItems = cartItems.reduce((count, item) =>{
return count + item.quantity
 }, 0)
  return (
    <>
      <header className='bg-rose-950 h-16 text-white p-4  '>
       <div className='container mx-auto px-4 flex flex-row justify-between items-center'>
        <span className='font-bold text-xl'>MyCart</span>
        <div className='relative'>
          <Link to={'/cart'}>
        <span className="material-symbols-outlined">
          local_mall
        </span>
        </Link>
        <span className='absolute text-xs '>{numberOfItems}</span>
        </div>
        
        </div>
      </header>
    </>
  )
}

export default Header