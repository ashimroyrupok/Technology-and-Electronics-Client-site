import { Children, useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate } from "react-router-dom";

const ProductDetailsPrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)


    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
       return children
    }
    return <Navigate to="/signin"></Navigate>

};

export default ProductDetailsPrivateRoute;