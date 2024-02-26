import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import bin from '../../assets/icons/bin.png'
import './wishlistProductCard.css'
import wishlistBackground from '../../assets/images/wishlist-background.png'
import { Product } from '../../interfaces y types/interfaces';

type Props = {}

const WishlistProductCard = (props: Props) => {

    const user = useContext(UserContext)
    const userLogged = user.userData;
    const userWishlist = userLogged?.Wishlist;
    let productsFiltered:Product[] | undefined = userWishlist?.filter((item, index, array) => array.findIndex(p => p.Id === item.Id) === index)


  return (
    <>
        <section className="wishlist-container-products">
        {productsFiltered && productsFiltered.length > 0 ? (
            productsFiltered?.map(element =>{
                return (
                <div className="wishlist-productcard" key={element.Id}>
                    <img className="wishlist-img" src={element.Image} />
                    <div>
                        <h4>{element.name}</h4>
                        <p>{element.Collection}</p>
                        <p>${element.Price}</p>
                    </div>
                    <div>
                        <img className="wishlist-bin" src={bin} />
                    </div>
                </div>
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