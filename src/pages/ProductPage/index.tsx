import { useParams } from "react-router-dom";
import './productPage.css'
import { useEffect, useState } from "react";
import star from '../../assets/icons/star.png'
import cart from '../../assets/icons/shoppingCart.png'


export const ProductPage = () => {
    const params = useParams();
    const [products, setProducts] = useState()


    const fetchProducts = async() => {
    const response = await fetch('/src/data/products.json');
    const data = await response.json();
    return data;
    }
    
    useEffect(() => {
        const fetchingProducts = async () => {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        };
    
        fetchingProducts();
      }, []);
     console.log(products)

    const choosenProduct = products?.find(product => product.Id === params.productId );
    console.log(choosenProduct)
    choosenProduct && console.log(choosenProduct.Colors)

    return (
    <>
        <div className="container-product-page">
            {choosenProduct && <img className="productpage-img" src ={choosenProduct.Image} />}
            <div className="rating-info">
                <img className="rating-img" src={star} />{choosenProduct && <span>{choosenProduct.Rating}</span>}
                {choosenProduct && <h2>{choosenProduct.name}</h2>}
            </div>
            {choosenProduct && <p>{choosenProduct.Collection}</p>}
            {choosenProduct && (
                <div className="color-info">
                    <h4>Colors:</h4>
                    <span>
                        {choosenProduct.Colors.map((color, index) => (
                            <span key={index}>{color} </span>
                        ))}
                    </span>
                </div>
            )}

        </div>
        <section className="container-addtocart">
        {choosenProduct && <p className="product-page-price">${choosenProduct.Price}</p>}
        <button className="addtocart-btn">Add to Cart<img className="cart-icon" src={cart} /></button>

        </section>
    </>
    )
}
