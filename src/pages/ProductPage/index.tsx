import { Link, useParams } from "react-router-dom";
import "./productPage.css";
import { useContext, useEffect, useState } from "react";
import star from "../../assets/icons/star.png";
import cart from "../../assets/icons/shoppingCart.png";
import back from "../../assets/icons/back.png";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import bag from "../../assets/icons/bag.png";
import { Product, User, UserContextType } from "../../interfaces/interfaces";

export const ProductPage = () => {
  const params = useParams();
  const [products, setProducts] = useState<Product[] | undefined>();

  const fetchProducts = async () => {
    const response = await fetch("/src/data/products.json");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchingProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchingProducts();
  }, []);

  const choosenProduct: Product | undefined = products?.find(
    (product: { Id: string | undefined }) => product.Id === params.productId
  );

  const user:UserContextType = useContext(UserContext);
  const userLogged = user.userData;

  const addToBag = (choosenProduct: Product, userLogged: User) => {
    toast.success("Successfully added to your bag!");
    if (choosenProduct && userLogged) {
      userLogged.Cart.push(choosenProduct);
    }
  };

  return (
    <>
      <Toaster />
      <div className="container-product-page">
        <section className="productpage-main-img">
          <button className="productpage-back-icon">
            <Link to="/homepage">
              <img src={back} />
            </Link>
          </button>
          {choosenProduct && (
            <img
              className="productpage-img"
              alt={choosenProduct.name}
              src={choosenProduct.Image}
            />
          )}
          <Link to={"/shoppingcart"}>
            <div className="product-page-alert">
              <img className="productpage-bag" src={bag} />
            </div>
          </Link>
        </section>
        <div className="rating-info">
          <img className="rating-img" src={star} />
          {choosenProduct && <span>{choosenProduct.Rating}</span>}
          {choosenProduct && <h2>{choosenProduct.name}</h2>}
        </div>
        {choosenProduct && <p>{choosenProduct.Collection}</p>}
        {choosenProduct && (
          <div className="color-info">
            <h4>Colors:</h4>
            <span className="productpage-colors">
              {choosenProduct.Colors.map((color, index) => (
                <span key={index} className="color-item">
                  <span className="circle-color" style={{ backgroundColor: color.ref || 'transparent' }}></span>
                  {color.name}
                </span>
              ))}
            </span>
          </div>
        )}
      </div>
      <section className="container-addtocart">
        {choosenProduct && (
          <p className="product-page-price">${choosenProduct.Price}</p>
        )}
        {userLogged && choosenProduct && (
          <button
            onClick={() => addToBag(choosenProduct, userLogged)}
            className="addtocart-btn"
          >
            Add to Cart
            <img className="cart-icon" src={cart} />
          </button>
        )}
      </section>
    </>
  );
};
