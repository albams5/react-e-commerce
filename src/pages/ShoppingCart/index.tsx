import { Navigation } from "../../components/layout/Navbar"
import './shoppingCart.css'
import ShoppingCartProducts from "../../components/shoppingCartprodCard"
import Header from "../../components/layout/Header"

export const ShoppingCart = () => {

   return (
    <>
    <div className="main-container-shoppingcart">
        <Header page="Shopping Cart"/>
        <ShoppingCartProducts/>
    </div>
        <Navigation/>
    </>
)}
