import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../features/cart/cartSlice'

function Product(props) {


    const dispatch = useDispatch()
    const {image, title, price} = props.product
  return (
   <>
   <article className='border p-4 rounded-md'>
          <img className="aspect-[3/4]  object-cover object-center" src={image}></img>
          <h3>{title}
          </h3>
          
          <div className='flex flex-row justify-between'>
          <span>${price}</span>
          <button onClick={() => dispatch(addItemToCart(props.product))} className='text-sm text-white bg-green-700 px-2 py-1 rounded'>+Add</button>
          </div>
          </article>
   </>
  )
}

export default Product