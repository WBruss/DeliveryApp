import React, {useContext, useEffect} from "react";
import {AppContext} from "../../App";
import {Redirect, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ component: Component, ...rest}) => {

    const { appContext, setAppContext } = useContext(AppContext);


    // const getAuthenticated = () => {
    //     let token = localStorage.getItem('token')
    //     if(token){
    //         let token_decode = jwt_decode(token);
    //         if (token_decode.name){
    //             // setAppContext({
    //             //     ...appContext,
    //             //     user: {
    //             //         name: token_decode.name,
    //             //         email: token_decode.email,
    //             //         role: token_decode.role,
    //             //     }
    //             // })
    //             return true;
    //         }else {
    //             return false;
    //         }
    //     }
    //     return false;
    // }

    return(
        <Route
            {...rest}
            component={(props) => (
                appContext.user.name? (
                    <Component {...props}/>
                ):(
                    <Redirect to='/login'/>
                )
            )}
        />
    )
}

export default PrivateRoute;
