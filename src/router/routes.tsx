import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import { ProductPage } from "../pages/ProductPage";
import Login from "../pages/Login";
import { UserContext } from "../context/userContext";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";

type Props = {}

export const AppRoutes = (props: Props) => {


  return (
    <AuthProvider>
      <BrowserRouter>
        <UserContext>
            <Routes>
              <Route index element={<Login />}/>
              <Route path="/homepage" element={<ProtectedRoute component={Home} />} />
              <Route path="/:productId" element={<ProtectedRoute component={ProductPage} />} />
              <Route path="/wishlist" />
              <Route path="/shoppingcart" element={<ProtectedRoute component={ShoppingCart} />} />
              <Route path="*" element={<Navigate replace to="/" />}/>
            </Routes>
        </UserContext>
      </BrowserRouter>
    </AuthProvider>
  )
}