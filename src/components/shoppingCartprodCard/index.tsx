import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "./shoppingCartProducts.css";
import shoppingCartBackground from "../../assets/images/shoppingcart-background.png";
import CartElement from "./CartElement";
import ShoppingCartAmount from "./ShoppingCartAmount";

const ShoppingCartProducts = () => {
  const user = useContext(UserContext);
  const userLogged = user.userData;
  const userCart = userLogged?.Cart;
  const [price, setPrice] = useState(0);

  const subTotalSum = () => {
    let total = 0;
    userCart?.forEach((product) => {
      total += product.Price;
    });
    setPrice(total);
  };

  let productsFiltered = userCart?.filter(
    (item, index, array) => array.findIndex((p) => p.Id === item.Id) === index
  );
  const [productsToShow, setProductsToShow] = useState(productsFiltered);

  useEffect(() => {
    subTotalSum();
  }, [productsToShow]);

  return (
    <>
      <section className="shoppingcart-container-products">
        {productsToShow && productsToShow.length > 0 ? (
          productsToShow?.map((element) => {
            return (
              <CartElement key={element.Id}
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
