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
  // console.log(userLogged?.Cart);

  let productsFiltered = userCart?.filter(
    (item, index, array) => array.findIndex((p) => p.Id === item.Id) === index
  );
  const [productsToShow, setProductsToShow] = useState(productsFiltered);
  console.log({ productsToShow });

  useEffect(() => {}, [productsToShow]);

  
  return (
    <>
      <section className="shoppingcart-container-products">
        {productsToShow && productsToShow.length > 0 ? (
          productsToShow?.map((element) => {
            
           return <CartElement element={element} productsFiltered={productsFiltered} setProductsToShow={setProductsToShow}/>
          })
        ) : (
          <div className="shoppingcart-background-container">
            <img src={shoppingCartBackground} />
          </div>
        )}
      </section>
      <ShoppingCartAmount productsToShow={productsToShow} />
      {/* <section className="shoppingcart-amount">
        <p>Subtotal amount: ${subTotalSum.toFixed(2)}</p>
        <p>
          Shipping:
          {productsToShow && productsToShow.length <= 0 ? "$0" : "$25.99"}
        </p>
        <h4>
          Total amount: $
          {productsToShow && productsToShow.length <= 0
            ? "0"
            : (parseFloat(subTotalSum.toFixed(2)) + 25.99).toFixed(2)}
        </h4>
        <button className="shoppingcart-purchase">Purchase</button>
      </section> */}
    </>
  );
};

export default ShoppingCartProducts;
