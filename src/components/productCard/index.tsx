import React, { useContext, useEffect, useState } from 'react'
import like from "../../assets/icons/like.png"
import add from "../../assets/icons/add.png"
import "./productCard.css"
import { Link } from 'react-router-dom'
import { User, UserContext } from '../../context/UserContext'
import { Product } from '../../pages/ProductPage'
import toast, { Toaster } from 'react-hot-toast'

type Props = {}

const ProductCard = (props: Props) => {

  const [productData, setProductData] = useState([])

  const fetchProducts = () => {
    fetch('src/data/products.json')
      .then(res=>res.json())
      .then(products=> setProductData(products))
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  const user = useContext(UserContext)
    const userLogged = user.userData;

 const addToBag = (product: Product, userLogged: User | null) => {
  toast.success('Successfully added to your bag!')
  if(product && userLogged){
    userLogged.Cart.push(product);
  }
  console.log(userLogged);
 }

  return (
    <>
        <Toaster/>
      {productData.map(product=>
        <div key={product.Id}>
          <Link to={`/${product.Id.toString()}`}>
            <div className="container-product-img">
                <img className="product-img" src={product.Image} />
                <div className="container-like">
                    <img className="product-like" src={like}/>
                </div>
            </div>
          </Link>
            <div className="addtocart-container">
                <p className="product-name">{product.name}</p>
                <img className="addtocart-icon" onClick={() =>addToBag(product, userLogged)} src={add} />
            </div>
            <p className="product-price">{"$" + product.Price}</p>
        </div>
        )}
    </>
  )
}

export default ProductCard