import React, { createContext, useState } from 'react'

interface CartContextType {
    cart: any[];
    setCart: React.Dispatch<React.SetStateAction<any[]>>;
  }

  export const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => {},
  });

  const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState<any[]>([]);
  
    return (
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    );
  };

  export default ShoppingCartProvider
