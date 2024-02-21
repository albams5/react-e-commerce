import { Link } from "react-router-dom"
import { Navigation } from "../../components/layout/Navbar"
import './shoppingCart.css'
import back from '../../assets/icons/back.png'


export const ShoppingCart = () => {
   return (
    <>
    <div className="main-container-shoppingcart">
        <div className="shoppingcart-header">
        <button className="shopping-back-icon">
                <Link to="/homepage">
                    <img src={back} />
                </Link>
            </button>
            <h2>Shopping Cart</h2>
            
        </div>
    </div>
        <Navigation/>
    </>
   )
}
