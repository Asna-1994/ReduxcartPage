import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../features/cart/cartSlice';

function CartItems(props) {

    const Items = useSelector(state => state.cart.items)
    const dispatch = useDispatch();
    return (
        <section className='container mx-auto px-5 md:px-16 py-8'>
            <h2 className='font-bold text-2xl'>Cart Page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6'>
                {
                    Items.map((item, index) => {
                        return (

                            <article key={index} className='border shadow-lg rounded p-4 grid grid-cols-3  gap-6'>
                                <img className=' ' src={item.image}></img>
                                <div className='col-span-2 flex flex-col justify-center gap-1'>
                                    <h3 className='font-bold'>{item.title}</h3>
                                    <span>${item.price}</span>

                                    <div className='flex flex-row gap-2 mt-3 '>
                                        <button onClick={() => dispatch(decrementQuantity(index))} className='bg-slate-300 w-6'>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(incrementQuantity(index))} className='bg-slate-300 w-6'>+</button>
                                    </div>
                                </div>
                            </article>

                        )
                    })
                }
            </div>
        </section>

    )
}

export default CartItems