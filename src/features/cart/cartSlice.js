import { createSlice } from '@reduxjs/toolkit'
import Product from '../../components/product/Product'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {

      const duplicates = state.items.filter(item => {
        if(item._id === action.payload._id) {
          return item
        }
      })
      if(duplicates.length === 0) {
        const productEntry = {
          ...action.payload,
          quantity: 1
        }
        state.items.push(productEntry)
      }
      else {
        state.items = state.items.map(item => {
          if(item._id === action.payload._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      }

    },
    decrementQuantity: (state, action) => {

      state.items = state.items.map((product, index) => {
        if (index === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1
          }

        }
        return product
      })
      state.items = state.items.filter(item => {
        if (item.quantity !== 0) {
          return item
        }
      })

    },
    incrementQuantity: (state, action) => {

      state.items = state.items.map((product, index) => {
        if (index === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })

    }


  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, decrementQuantity, incrementQuantity } = cartSlice.actions

export default cartSlice.reducer