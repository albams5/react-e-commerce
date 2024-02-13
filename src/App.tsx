// import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {Home, ProductPage, ShoppingCart} from './pages'

//!
//?
//*
function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/homepage" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />

      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to="/homepage">Home Page</Link>
      </li>
      <li>
        <Link to="/productpage">Product Page</Link>
      </li>
      <li>
        <Link to="/shoppingcart">Shopping Cart</Link>
      </li>
    </ul>
  </nav>
}

export default App
