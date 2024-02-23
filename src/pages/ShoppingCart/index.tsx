import { Link } from "react-router-dom"
import { Navigation } from "../../components/layout/Navbar"
import './shoppingCart.css'
import back from '../../assets/icons/back.png'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import bin from '../../assets/icons/bin.png'
import minus from '../../assets/icons/minus.png'
import plus from '../../assets/icons/add.png'

export const ShoppingCart = () => {
    const user = useContext(UserContext)
    const userLogged = user.userData;
    const userCart = userLogged?.Cart;
    console.log(userLogged?.Cart);
    
    let productsFiltered = userCart?.filter((item, index, array) => array.findIndex(p => p.Id === item.Id) === index)
    const[productsToShow, setProductsToShow] = useState(productsFiltered)


    let subTotalSum = 0;

    // useEffect (() => {
        const removeItem = (id: string | undefined) => {
            const productToRemove = productsFiltered?.find(product => product.Id === id);
            const idToRemove:string | undefined = productToRemove?.Id;
            let cartModified = productsFiltered?.filter(element => element.Id !== idToRemove);
            setProductsToShow(cartModified);
        };
    //     removeItem(removeItem)
    // }, [])

   return (
    <>
    <div className="main-container-shoppingcart">
        <div className="shoppingcart-header">
        <button className="shopping-back-icon">
                <Link to="/homepage">
                    <img src={back} />
                </Link>
            </button>
            <h2>Shopping Cart</h2>
        </div>
        <section className="shoppingcart-container-products">
            {productsToShow?.map(element =>{
                let quantity = userCart?.filter(p => p.Id === element.Id).length;
                const [quantityProduct, setQuantityProduct] = useState(quantity);
                const pricePerQuantity = (element.Price * quantityProduct).toFixed(2);
                subTotalSum+=(parseFloat(pricePerQuantity));
                return (
                <div className="shoppingcart-productcard" key={element.Id}>
                    <img className="shoppingcart-img" src={element.Image} />
                    <div>
                        <h4>{element.name}</h4>
                        <p>{element.Collection}</p>
                        <p>${pricePerQuantity}</p>
                        <p>Quantity:<img className="shoppingcart-quantity-btn" onClick={() => setQuantityProduct(quantityProduct && quantityProduct - 1)} src={minus} />{quantityProduct}<img className="shoppingcart-quantity-btn" onClick={() => setQuantityProduct(quantityProduct && quantityProduct + 1)} src={plus} /></p>
                    </div>
                    <div>
                        <img className="shoppingcart-bin" onClick={() => removeItem(element.Id)} src={bin} />
                    </div>
                </div>
                );
})}
        </section>
        <section className="shoppingcart-amount">
            <p>Subtotal amount: ${subTotalSum.toFixed(2)}</p>
            <p>Shipping: $25.99</p>
            <h4>Total amount: ${parseFloat(subTotalSum.toFixed(2)) + 25.99}</h4>
            <button className="shoppingcart-purchase">Purchase</button>

        </section>
    </div>
        <Navigation/>
    </>
   )
}
