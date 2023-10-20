import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AddProductPrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location =useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    else{

        return  <Navigate state={location.pathname} to="/signin"></Navigate>
    }
    
};

export default AddProductPrivateRoute;