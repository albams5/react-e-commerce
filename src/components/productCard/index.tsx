import React from 'react'
import sillaMadera from "../../assets/images/silla-madera.jpg"
import like from "../../assets/icons/like.png"
import add from "../../assets/icons/add.png"
import "./productCard.css"

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div>
        <div className="container-product-img">
            <img className="product-img" src={sillaMadera} />
            <div className="container-like">
                <img className="product-like" src={like}/>
            </div>
        </div>
        <div className="addtocart-container">
            <p>Concept Chair</p>
            <img className="addtocart-icon" src={add} />
        </div>
        <p>$75.99</p>
    </div>
  )
}

export default ProductCard