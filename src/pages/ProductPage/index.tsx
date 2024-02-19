import { useParams } from "react-router-dom";
import { Navigation } from "../../components/layout/Navbar"
import './productPage.css'
import { useEffect, useState } from "react";
import star from '../../assets/icons/star.png'


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
            <img className="rating-img" src={star} />{choosenProduct && <span>{choosenProduct.Rating}</span>}
            {choosenProduct && <img src ={choosenProduct.Image} />}
            {choosenProduct && <h2>{choosenProduct.name}</h2>}
            {choosenProduct && <p>{choosenProduct.Collection}</p>}
            {choosenProduct && (
                <div>
                    <h4>Colors:</h4>
                    <span>
                        {choosenProduct.Colors.map((color, index) => (
                            <p key={index}>{color} </p>
                        ))}
                    </span>
                </div>
            )}

        </div>
        <Navigation/>
    </>
    )
}
