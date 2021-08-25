import React, {useContext} from "react";
import {AppContext} from "../../App";
import {Redirect, Route} from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest}) => {

    const { appContext } = useContext(AppContext);

    return(
        <Route
            {...rest}
            component={(props) => (
                appContext.user.authenticated ? (
                    <Component {...props}/>
                ):(
                    <Redirect to='/login'/>
                )
            )}
        />
    )
}

export default PrivateRoute;
