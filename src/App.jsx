import { useState } from 'react'
import './App.css'
import Product from './components/product/Product'


function App(props) {


  const [products, setProducts] = useState([
    {
      _id: 1,
      image: '/sundress-1.webp',
      title: 'Casual Blue Sundress',
      price: '29.65',

    },
    {
      _id: 2,
      image: '/kurti-1.webp',
      title: 'Midnight Charm Black Kurti',
      price: '39.99',

    },
    {
      _id: 3,
      image: '/croptop-1.webp',
      title: 'Pretty in Pink Croptop',
      price: '24.65',

    },
    {
      _id: 4,
      image: '/ostshirt-1.webp',
      title: 'Bold Red Checkered Shirt',
      price: '20.65',

    },

  ]);

  return (
    <>

      
      <main className='container mx-auto px-4'>
        <h1 className='text-2xl py-8 font-bold'>Popular Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-36 mt-6'>
          {products.map((product, index) => {
            return (
              <Product key={index} product={product} />
            )
          })
          }
        </div>
       
          
       

      </main>
     
    </>
  )
}

export default App
