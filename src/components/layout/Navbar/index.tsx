import { Link, Outlet, NavLink } from 'react-router-dom';
import homeIcon from '../../../assets/icons/homeIcon.svg'
import homeIconActive from '../../../assets/icons/homeIconActive.svg'
import user from '../../../assets/icons/user.png'
import wishlist from '../../../assets/icons/wishlist.png'
import wishlistActive from '../../../assets/icons/wishlistActive.png'
import shoppingCart from '../../../assets/icons/shoppingCart.png'
import "./navbar.css"

export function Navigation() {

    return (
    <section>
      <nav>
      <ul className = "navbar-style">
        <li>
          <NavLink to="/homepage">{(isActive) => isActive ? <img src={homeIconActive} alt="Home" /> : <img src={homeIcon} alt="Home" />}</NavLink>
        </li>
        <li>
          <NavLink to="/wishlist">{(isActive) => isActive ? <img src={wishlistActive} alt="Home" /> : <img src={wishlist} alt="Home" />}</NavLink>
        </li>
        <li>
          <NavLink to="/shoppingcart"><img src={shoppingCart} alt="Shopping Cart" /></NavLink>
        </li>
        <li>
          <NavLink to="/profile"><img src={user} alt="Login" /></NavLink>
        </li>
      </ul>
    </nav>
    <section>
      <Outlet/>
    </section>
    </section>)
     
  }