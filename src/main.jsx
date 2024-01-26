import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import store from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/RootLayout.jsx';
import CartItems from './components/cart/CartItrms.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <CartItems/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
