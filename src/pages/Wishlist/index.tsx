import Header from '../../components/layout/Header'
import './wishlist.css'
import { Navigation } from '../../components/layout/Navbar'
import WishlistProductCard from '../../components/wishlistProdCard/WishlistProductCard'

const Wishlist = () => {


  return (
    <>
    <div className="main-container-wishlist">
      <Header page="Wishlist"/>
      <WishlistProductCard/>
    </div>
      <Navigation/>
    </>
  )
}

export default Wishlist