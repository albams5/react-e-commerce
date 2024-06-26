import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ShoppingCart } from "../pages/ShoppingCart";
import { ProductPage } from "../pages/ProductPage";
import Login from "../pages/Login";
import { UserContextProvider } from "../context/usercontext";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import Wishlist from "../pages/Wishlist";
import Profile from "../pages/Profile";

export const AppRoutes = () => {
  const login = window.localStorage.getItem("isLogged");

  return (
    <AuthProvider>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route index element={<Login />} />
            <Route
              path="/homepage"
              element={<ProtectedRoute component={login ? Home : Login} />}
            />
            <Route
              path="/:productId"
              element={<ProtectedRoute component={ProductPage} />}
            />
            <Route
              path="/wishlist"
              element={<ProtectedRoute component={Wishlist} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />
            <Route
              path="/shoppingcart"
              element={<ProtectedRoute component={ShoppingCart} />}
            />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </AuthProvider>
  );
};
