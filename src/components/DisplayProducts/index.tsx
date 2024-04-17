import React, { useState } from 'react'
import {Product} from '../../interfaces/interfaces'
import { User } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom'
import like from "../../assets/icons/like.png";
import likedProduct from "../../assets/icons/likedproduct.png";
import add from "../../assets/icons/add.png";
import toast from 'react-hot-toast';

type Props = {
  product: Product,
  userLogged: User | null,
  addToBag: Function
}

export const DisplayProducts = ({product, userLogged, addToBag}:Props) => {
  const [liked, setLiked] = useState(false)
  
  // product.isWishlistItem && setLiked(liked)
  const addToWishlist = (product: Product, userLogged: User | null) => {
    if(!liked){
      toast.success("Successfully added to your wishlist!");
      setLiked(!liked)
      if (product && userLogged) {
        userLogged.Wishlist.push(product);
      }
    } else if(liked) {
      setLiked(!liked)
      toast.error("Removed from your wishlist!")
      if(userLogged){
        const updatedWishlist = userLogged.Wishlist.filter(
          (item) => item.Id !== product.Id
        );
        userLogged.Wishlist = updatedWishlist
      }
    }
  };
  return (
      <div key={product.Id}>
        <div className="container-product-img">
          <Link to={`/${product.Id?.toString()}`}>
            <img className="product-img" src={product.Image} />
          </Link>
          <div className="container-like">
            <img
              className="product-like"
              onClick={() => addToWishlist(product, userLogged) }
              src={!liked ? like : likedProduct}
            />
          </div>
        </div>
        <div className="addtocart-container">
          <p className="product-name">{product.name}</p>
          <img
            className="addtocart-icon"
            onClick={() => addToBag(product, userLogged)}
            src={add}
          />
        </div>
        <p className="product-price">{"$" + product.Price}</p>
      </div>
  )
}
