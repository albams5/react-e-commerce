import React, { useState } from "react";
import bin from "../../assets/icons/bin.png";
import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/add.png";
import { Product } from "../../interfaces y types/interfaces";

type Props = {
    element: Product,
    productsFiltered: Product[] | undefined,
    setProductsToShow: Function
};

let subTotalSum: object[] = [];

const CartElement = ({
    element,
    productsFiltered,
    setProductsToShow,
}: Props) => {
    const quantity = element.Quantity;
    
    const [quantityProduct, setQuantityProduct] = useState(quantity);

    const pricePerQuantity = (element.Price * quantityProduct).toFixed(2);
    
    console.log("subtotalsum dentro del cartelement", subTotalSum)

  const removeItem = (id: string | undefined) => {
    const idToRemove: string | undefined = id;
    let cartModified = productsFiltered?.filter(
      (element:Product) => element.Id !== idToRemove
    );
    setProductsToShow(cartModified);
  };


  return (
    <div className="shoppingcart-productcard" key={element.Id}>
      <img className="shoppingcart-img" src={element.Image} />
      <div>
        <h4>{element.name}</h4>
        <p>{element.Collection}</p>
        <p>${pricePerQuantity}</p>
        <p>
          Quantity:
          <button className="shoppingcart-btn">
            <img
              className="shoppingcart-quantity-btn"
              onClick={() =>
                setQuantityProduct(quantityProduct && quantityProduct - 1)
              }
              src={minus}
            />
          </button>
          {quantityProduct}
          <button className="shoppingcart-btn">
            <img
              className="shoppingcart-quantity-btn"
              onClick={() =>
                setQuantityProduct(quantityProduct && quantityProduct + 1)
              }
              src={plus}
            />
          </button>
        </p>
      </div>
      <div>
        <button className="shoppingcart-btn">
          <img
            className="shoppingcart-bin"
            onClick={() => removeItem(element.Id)}
            src={bin}
          />
        </button>
      </div>
    </div>
  );
};

export default CartElement;
