import React from 'react'
import { Product } from '../../interfaces y types/interfaces'
import bin from '../../assets/icons/bin.png'


type Props = {
    element: Product,
    productsFiltered: Product[] |undefined,
    setProductsToShow: Function
}

const WishlistElement = ({element, productsFiltered, setProductsToShow}:Props) => {
    const removeItem = (id: string | undefined) => {
        const idToRemove: string | undefined = id;
        let cartModified = productsFiltered?.filter(
          (element:Product) => element.Id !== idToRemove
        );
        setProductsToShow(cartModified);
      };
  return (
    <div className="wishlist-productcard" key={element.Id}>
                    <img className="wishlist-img" src={element.Image} />
                    <div>
                        <h4>{element.name}</h4>
                        <p>{element.Collection}</p>
                        <p>${element.Price}</p>
                    </div>
                    <div>
                        <button onClick={()=>removeItem(element.Id)} className="wishlist-btn"><img className="wishlist-bin" src={bin} /></button>
                    </div>
                </div>
  )
}

export default WishlistElement