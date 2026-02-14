import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContextProvider from './Components/Pages/CartContextProvider.jsx';
import WishlistContextProvider from './Components/Pages/WishlistContextProvider.jsx';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContextProvider>
      <WishlistContextProvider>
    <App />
    </WishlistContextProvider>
    </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
