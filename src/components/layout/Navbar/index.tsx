import {Outlet, NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.png'
import homeIconActive from '../../../assets/icons/homeIconActive.png'
import user from '../../../assets/icons/user.png'
import userActive from '../../../assets/icons/userActive.png'
import wishlist from '../../../assets/icons/wishlist.png'
import wishlistActive from '../../../assets/icons/wishlistActive.png'
import shoppingCart from '../../../assets/icons/shoppingCart.png'
import shoppingCartActive from '../../../assets/icons/shoppingCartActive.png'
import "./navbar.css"

export function Navigation() {

    return (
    <section>
      <nav>
      <ul className = "navbar-style">
        <li>
          <NavLink to="/homepage">{location.pathname === "/homepage" ? (<img src={homeIconActive} alt="Home" />) :(<img src={homeIcon} alt="Home" />) }</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">{location.pathname === "/wishlist" ? (<img src={wishlistActive} alt="Home" />) :(<img src={wishlist} alt="Home" />) }</NavLink>
        </li>
        <li>
          <NavLink to="/shoppingcart">{location.pathname === "/shoppingcart" ? (<img src={shoppingCartActive} alt="Home" />) :(<img src={shoppingCart} alt="Home" />) }</NavLink>
        </li>
        <li>
          <NavLink to="/profile">{location.pathname === "/profile" ? (<img src={userActive} alt="Home" />) :(<img src={user} alt="Home" />) }</NavLink>
        </li>
      </ul>
    </nav>
    <section>
      <Outlet/>
    </section>
    </section>)
     
  }