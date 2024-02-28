import { Product } from '../../interfaces y types/interfaces'
import bin from '../../assets/icons/bin.png'
import { useState } from 'react'


type Props = {
    element: Product,
    productsFiltered: Product[] |undefined,
    setProductsToShow: Function,
    userWishlist: Product[] | undefined
}

const WishlistElement = ({element, productsFiltered, setProductsToShow, userWishlist}:Props) => {



  const removeItem = () => {
      minusItem();
    let productsCleaned = userWishlist?.filter(
      (item, index, array) => array.findIndex((p) => p.Id === item.Id) === index
      );
      setProductsToShow(productsCleaned);
    };
    const minusItem = () => {
      const index = userWishlist?.findIndex(item => item.Id === element.Id);
      if (index!== undefined && userWishlist) {
        userWishlist.splice(index, 1);
        console.log(productsFiltered)
        console.log("dentro del if")
      }
    }

  return (
    <div className="wishlist-productcard" key={element.Id}>
                    <img className="wishlist-img" src={element.Image} />
                    <div>
                        <h4>{element.name}</h4>
                        <p>{element.Collection}</p>
                        <p>${element.Price}</p>
                    </div>
                    <div>
                        <button onClick={()=>removeItem()} className="wishlist-btn"><img className="wishlist-bin" src={bin} /></button>
                    </div>
                </div>
  )
}

export default WishlistElement