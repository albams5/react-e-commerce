import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import { ProductPage } from "../pages/ProductPage";
import Login from "../pages/Login";
import { Navigation } from "../components/layout/Navbar";

type Props = {}

export const AppRoutes = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Login />}/> */}
        <Route path="/homepage" element={<Home />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/wishlist" />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/*" element="This page doesn't exist :("/>
      </Routes>
      {/* <Navigation/> */}
    </BrowserRouter>
  )
}