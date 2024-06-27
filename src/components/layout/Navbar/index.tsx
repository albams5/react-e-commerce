import {Outlet, NavLink } from 'react-router-dom';
import homeIcon from '../../../../public/assets/icons/homeIcon.png'
import homeIconActive from '../../../../public/assets/icons/homeIconActive.png'
import user from '../../../../public/assets/icons/user.png'
import userActive from '../../../../public/assets/icons/userActive.png'
import wishlist from '../../../../public/assets/icons/wishlist.png'
import wishlistActive from '../../../../public/assets/icons/wishlistActive.png'
import shoppingCart from '../../../../public/assets/icons/shoppingCart.png'
import shoppingCartActive from '../../../../public/assets/icons/shoppingCartActive.png'
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