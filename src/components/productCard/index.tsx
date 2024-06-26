import { useContext, useEffect, useState } from "react";
import "./productCard.css";
import { UserContext } from "../../context/usercontext";
import toast, { Toaster } from "react-hot-toast";
import { Product, User, UserContextType } from "../../interfaces/interfaces";
import { DisplayProducts } from "../DisplayProducts";

type Props = {
  category: string;
};

const ProductCard = (props: Props) => {
  const [productData, setProductData] = useState([] as Product[]);
  const user: UserContextType = useContext(UserContext);
  const userLogged = user.userData;
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
        <DisplayProducts
          key={product.Id}
          product={product}
          userLogged={userLogged}
          addToBag={addToBag}
        />
      ))}
    </>
  );
};

export default ProductCard;
