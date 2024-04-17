import { useContext, useEffect, useState } from "react";
import like from "../../assets/icons/like.png";
import likedProduct from "../../assets/icons/likedproduct.png";
import add from "../../assets/icons/add.png";
import "./productCard.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import toast, { Toaster } from "react-hot-toast";
import { Product, User } from "../../interfaces/interfaces";
import { DisplayProducts } from "../DisplayProducts";

type Props = {
  category: string;
};

const ProductCard = (props: Props) => {
  const [productData, setProductData] = useState([] as Product[]);
  const user = useContext(UserContext);
  const userLogged = user.userData;
  const filteredProducts = productData.filter((product) =>
    product.Category.includes(props.category)
  );
//   filteredProducts.forEach(product => {
//     const isWishlistItem = userLogged?.Wishlist.some(wishlistItem => wishlistItem.Id === product.Id);
//     if (isWishlistItem) {
//         product.isWishlistItem = true;
//     }
// });

  const fetchProducts = () => {
    fetch("src/data/products.json")
      .then((res) => res.json())
      .then((products) => setProductData(products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  

  const addToBag = (product: Product, userLogged: User | null) => {
    toast.success("Successfully added to your bag!");
    if (product && userLogged) {
      userLogged.Cart.push(product);
      product.Quantity += 1;
    }
  };


  return (
    <>
      <Toaster />
      {filteredProducts.map((product) => (
      <DisplayProducts key={product.Id} product={product} userLogged={userLogged} addToBag={addToBag} />
        ))}
    </>
  );
};

export default ProductCard;
