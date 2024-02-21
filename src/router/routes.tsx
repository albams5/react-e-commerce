import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import { ProductPage } from "../pages/ProductPage";
import Login from "../pages/Login";
import { UserContext } from "../context/userContext";

type Props = {}

export const AppRoutes = (props: Props) => {
  return (
    <BrowserRouter>
    <UserContext>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/homepage" element={<Home />} />
        <Route path="/:productId" element={<ProductPage />} />
        <Route path="/wishlist" />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/*" element="This page doesn't exist :("/>
      </Routes>
    </UserContext>
    </BrowserRouter>
  )
}