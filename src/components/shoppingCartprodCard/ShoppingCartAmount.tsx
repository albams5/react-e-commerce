

const ShoppingCartAmount = ({price, productsToShow}:any) => {

  return (
     <section className="shoppingcart-amount">
        <p>Subtotal amount: ${price.toFixed(2)}</p>
        <p>
          Shipping:
          {productsToShow && productsToShow.length <= 0 ? "$0" : "$25.99"}
        </p>
        <h4>
          Total amount: $
          {productsToShow && productsToShow.length <= 0
            ? "0"
            : (parseFloat(price.toFixed(2)) + 25.99).toFixed(2)}
        </h4>
        <button className="shoppingcart-purchase">Purchase</button>
      </section>
  )
}

export default ShoppingCartAmount