import React, {useContext, useEffect} from "react";
import {AppContext, UserContext} from "../../App";
import {Redirect, Route} from "react-router-dom";
import jwt_decode from "jwt-decode";
import HomePage from "../pages/homePage";

export const PrivateRoute = ({ component: Component, path:path, ...rest}) => {

    const { userContext, setUserContext } = useContext(UserContext);
    console.log("PrivateRoute ",path)

    return(
        <Route
            {...rest}
            render={(props) => (
                userContext.name? (
                    <AuthorizationRoute
                        {...props}
                        path={path}
                        component={Component}
                    />
                    // <Component {...props}/>
                ):(
                    <Redirect to='/login'/>
                )
            )}
        />
    )
}


export const AuthorizationRoute = ({ component: Component, path, ...rest}) => {

    const { userContext, setUserContext } = useContext(UserContext);

    console.log("ROLE ",userContext.role)
    console.log("path ",path)
    console.log("rest ",rest)

    return(
        <Route
            {...rest}
            render={(props) => (
                userContext.role === "SECRETARY" ? (
                    <Component {...props}/>
                ):(
                    <Redirect to='/'/>
                )
            )}
        />
    )
}

