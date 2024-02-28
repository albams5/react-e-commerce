import React, { useContext, useEffect, useState } from "react";
import like from "../../assets/icons/like.png";
import add from "../../assets/icons/add.png";
import "./productCard.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { Product, User } from "../../interfaces/interfaces";

type Props = {
  category: string;
};

const ProductCard = (props: Props) => {
  const [productData, setProductData] = useState([] as Product[]);
  const filteredProducts = productData.filter((product) =>
    product.Category.includes(props.category)
  );

  const fetchProducts = () => {
    fetch("src/data/products.json")
      .then((res) => res.json())
      .then((products) => setProductData(products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const user = useContext(UserContext);
  const userLogged = user.userData;

  const addToBag = (product: Product, userLogged: User | null) => {
    toast.success("Successfully added to your bag!");
    if (product && userLogged) {
      userLogged.Cart.push(product);
      product.Quantity += 1;
    }
  };

  const addToWishlist = (product: Product, userLogged: User | null) => {
    toast.success("Successfully added to your wishlist!");
    if (product && userLogged) {
      userLogged.Wishlist.push(product);
    }
  };

  return (
    <>
      <Toaster />
      {filteredProducts.map((product) => (
        <div key={product.Id}>
          <div className="container-product-img">
            <Link to={`/${product.Id.toString()}`}>
              <img className="product-img" src={product.Image} />
            </Link>
            <div className="container-like">
              <img
                className="product-like"
                onClick={() => addToWishlist(product, userLogged)}
                src={like}
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
      ))}
    </>
  );
};

export default ProductCard;
