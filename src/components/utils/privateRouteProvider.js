import React, {useContext} from "react";
import {UserContext} from "../../App";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({ component: Component, path, ...rest}) => {

    const { userContext } = useContext(UserContext);
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

    const { userContext } = useContext(UserContext);

    console.log("ROLE ",userContext.role)
    console.log("path ",path)
    console.log("rest ",rest)

    if(path === "officedeliveries"){
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
    }else {
        return(
            <Route
                {...rest}
                render={(props) => (
                    <Component {...props}/>
                )}
            />
        )
    }


}

