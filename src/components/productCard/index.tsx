import React, { useEffect, useState } from 'react'
import sillaMadera from "../../assets/images/silla-madera.jpg"
import like from "../../assets/icons/like.png"
import add from "../../assets/icons/add.png"
import "./productCard.css"
import { Link, Navigate } from 'react-router-dom'

type Props = {}

const ProductCard = (props: Props) => {

  const [productData, setProductData] = useState([])

  const fetchProducts = () => {
    fetch('src/data/products.json')
      .then(res=>res.json())
      .then(products=> setProductData(products))
  }

    console.log(productData)

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <>
      {productData.map(product=>
      <Link to={`/productpage/${product.Id}`}>
        <div key={product.Id}>
            <div className="container-product-img">
                <img className="product-img" src={sillaMadera} />
                <div className="container-like">
                    <img className="product-like" src={like}/>
                </div>
            </div>
            <div className="addtocart-container">
                <p>{product.name}</p>
                <img className="addtocart-icon" src={add} />
            </div>
            <p>{"$" + product.Price}</p>
        </div>
      </Link>  
        )}
    </>
  )
}

export default ProductCard