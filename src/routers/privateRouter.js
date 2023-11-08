import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Auth } from "../utils/AuthContext";

const PrivateRoutes = () =>{
    const {userIn}=useContext(Auth);
    return userIn ? <Outlet/> : <Navigate to="/LogIn"/>
};
export default PrivateRoutes;