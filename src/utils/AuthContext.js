import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const AuthContext = ({children}) =>{

    const[userIn, setUserIn] = useState(false)
    // const [loading, setLoading] = useState(false);

    useEffect(()=>{
        checkLogin()
    }, []);

// ---------------------------------CHECKING LOGIN----------------------------------------------

    const checkLogin = async () =>{
        // setLoading(true);
        const data = {
            token: JSON.parse(localStorage.getItem("token")),
        }
        await axios.post(process.env.REACT_APP_CHECK_LOGIN, data)
        .then(res=>{
            console.log(res);
            setUserIn(true);
            // setLoading(false);
        }).catch(err=>{
            console.log(err);
            setUserIn(false);
            // setLoading(false);
        })
    };
// --------------------------------------SIGN OUT-----------------------------------------
    const signOut = ()=>{
        localStorage.removeItem("token");
        setUserIn(false);
    }
// ------------------------------------GLOBAL----------------------------------------
    const globalStates = {
        userIn,
        setUserIn,
        // function
        signOut
    };
    
    return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
}