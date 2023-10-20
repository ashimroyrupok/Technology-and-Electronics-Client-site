import { Children, useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";

const ProductDetailsPrivateRoute = ({children}) => {
    const {user} =useContext(AuthContext)

    if(user){
       return children
    }
    return <Navigate to="/signin"></Navigate>

};

export default ProductDetailsPrivateRoute;