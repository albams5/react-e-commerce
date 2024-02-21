import { Navigate } from "react-router-dom";
import { useAuthState } from "../context/AuthContext"



const ProtectedRoute = ({
    component: Component,
}: {
    component: React.ElementType;
}) => {
    const {isAuthenticated} = useAuthState();
    return isAuthenticated ? <Component /> : <Navigate to="/" />
}

export default ProtectedRoute