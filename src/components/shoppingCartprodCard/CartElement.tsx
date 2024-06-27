import { useContext, useState } from "react";
import bin from "../../../public/assets/icons/bin.png";
import minus from "../../../public/assets/icons/minus.png";
import plus from "../../../public/assets/icons/add.png";
import { Product, UserContextType } from "../../interfaces/interfaces";
import { UserContext } from "../../context/UserContext";

type Props = {
  element: Product;
  setProductsToShow: Function;
  subTotalSum: Function;
};

const CartElement = ({ element, setProductsToShow, subTotalSum }: Props) => {
  const user: UserContextType = useContext(UserContext);
  const userLogged = user.userData;
  const userCart = userLogged?.Cart;

  const quantity = userCart?.filter((item: Product) => element.Id === item.Id)
    .length!;
  const [quantityProduct, setQuantityProduct] = useState(quantity);

  const pricePerQuantity = (element.Price * quantityProduct).toFixed(2);

  const removeItem = () => {
    for (let i = 0; i < quantity; i++) {
      minusItem();
    }
    setQuantityProduct(0);
    let productsFiltered = userCart?.filter(
      (item: Product, index: number, array: Product[]) =>
        array.findIndex((p: Product) => p.Id === item.Id) === index
    );
    setProductsToShow(productsFiltered);
  };

  const minusItem = () => {
    setQuantityProduct(quantityProduct && quantityProduct - 1);
    const index: number | undefined = userCart?.findIndex(
      (item: Product) => item.Id === element.Id
    );
    if (index !== undefined && userCart) {
      userCart.splice(index, 1);
    }
    subTotalSum();
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
              onClick={() => {
                minusItem();
              }}
              src={minus}
            />
          </button>
          {quantityProduct}
          <button className="shoppingcart-btn">
            <img
              className="shoppingcart-quantity-btn"
              onClick={() => {
                setQuantityProduct(quantityProduct && quantityProduct + 1);
                userCart?.push(element);
                subTotalSum();
              }}
              src={plus}
            />
          </button>
        </p>
      </div>
      <div>
        <button className="shoppingcart-btn">
          <img
            className="shoppingcart-bin"
            onClick={() => removeItem()}
            src={bin}
          />
        </button>
      </div>
    </div>
  );
};

export default CartElement;
