import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const UpdateProductPrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation
    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin' state={location.pathname}> </Navigate>
};

export default UpdateProductPrivateRoute;