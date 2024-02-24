import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.svg'
import user from '../../../assets/icons/user.png'
import wishlist from '../../../assets/icons/wishlist.png'
import shoppingCart from '../../../assets/icons/shoppingCart.png'
import "./navbar.css"

export function Navigation() {
    return (
    <section>
      <nav>
      <ul className = "navbar-style">
        <li>
          <Link to="/homepage"><img src={homeIcon} alt="Home" /></Link>
        </li>
        <li>
          <Link to="/wishlist"><img src={wishlist} alt="Whislist" /></Link>
        </li>
        <li>
          <Link to="/shoppingcart"><img src={shoppingCart} alt="Shopping Cart" /></Link>
        </li>
        <li>
          <Link to="/profile"><img src={user} alt="Login" /></Link>
        </li>
      </ul>
    </nav>
    <section>
      <Outlet/>
    </section>
    </section>)
     
  }