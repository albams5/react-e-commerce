import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import './wishlistProductCard.css'
import wishlistBackground from '../../assets/images/wishlist-background.png'
import { Product } from '../../interfaces y types/interfaces';
import WishlistElement from './WishlistElement';

type Props = {}

const WishlistProductCard = (props: Props) => {

    const user = useContext(UserContext)
    const userLogged = user.userData;
    const userWishlist = userLogged?.Wishlist;
    let productsFiltered:Product[] | undefined = userWishlist?.filter((item, index, array) => array.findIndex(p => p.Id === item.Id) === index);
    const [productsToShow, setProductsToShow] = useState(productsFiltered)

  return (
    <>
        <section className="wishlist-container-products">
        {productsToShow && productsToShow.length > 0 ? (
            productsToShow?.map(element =>{
                return (
                    <WishlistElement setProductsToShow={setProductsToShow} productsFiltered={productsFiltered} element={element}/>
                );
    })
         ) : (
            <div className="wishlist-background-container">
                <img src={wishlistBackground} />
            </div>
         )}
        </section>
    </>
  )
}

export default WishlistProductCard