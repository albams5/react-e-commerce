import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./shoppingCartProducts.css";
import shoppingCartBackground from "../../../public/assets/images/shoppingcart-background.png";
import CartElement from "./CartElement";
import ShoppingCartAmount from "./ShoppingCartAmount";
import { Product, UserContextType } from "../../interfaces/interfaces";

const ShoppingCartProducts = () => {
  const user: UserContextType = useContext(UserContext);
  const userLogged = user.userData;
  const userCart = userLogged?.Cart;
  const [price, setPrice] = useState(0);

  const subTotalSum = () => {
    let total = 0;
    userCart?.forEach((product: Product) => {
      total += product.Price;
    });
    setPrice(total);
  };

  let productsFiltered = userCart?.filter(
    (item: Product, index: number, array: Product[]) =>
      array.findIndex((p: Product) => p.Id === item.Id) === index
  );
  const [productsToShow, setProductsToShow] = useState(productsFiltered);

  useEffect(() => {
    subTotalSum();
  }, [productsToShow]);

  return (
    <>
      <section className="shoppingcart-container-products">
        {productsToShow && productsToShow.length > 0 ? (
          productsToShow?.map((element: Product) => {
            return (
              <CartElement
                key={element.Id}
                subTotalSum={subTotalSum}
                element={element}
                setProductsToShow={setProductsToShow}
              />
            );
          })
        ) : (
          <div className="shoppingcart-background-container">
            <img src={shoppingCartBackground} />
          </div>
        )}
      </section>
      <ShoppingCartAmount price={price} productsToShow={productsToShow} />
    </>
  );
};

export default ShoppingCartProducts;
