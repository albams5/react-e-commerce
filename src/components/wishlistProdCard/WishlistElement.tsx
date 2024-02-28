import { Product } from "../../interfaces/interfaces";
import bin from "../../assets/icons/bin.png";

type Props = {
  element: Product;
  setProductsToShow: Function;
  userWishlist: Product[] | undefined;
};

const WishlistElement = ({
  element,
  setProductsToShow,
  userWishlist,
}: Props) => {
  const removeItem = () => {
    minusItem();
    let productsCleaned = userWishlist?.filter(
      (item, index, array) => array.findIndex((p) => p.Id === item.Id) === index
    );
    setProductsToShow(productsCleaned);
  };
  const minusItem = () => {
    const index = userWishlist?.findIndex((item) => item.Id === element.Id);
    if (index !== undefined && userWishlist) {
      userWishlist.splice(index, 1);
    }
  };

  return (
    <div className="wishlist-productcard" key={element.Id}>
      <img className="wishlist-img" src={element.Image} />
      <div>
        <h4>{element.name}</h4>
        <p>{element.Collection}</p>
        <p>${element.Price}</p>
      </div>
      <div>
        <button onClick={() => removeItem()} className="wishlist-btn">
          <img className="wishlist-bin" src={bin} />
        </button>
      </div>
    </div>
  );
};

export default WishlistElement;
