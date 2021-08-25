import React , { useContext, useState } from "react";
import {Route, Redirect, useHistory} from 'react-router-dom';
import {AppContext} from "../App";

export const Auth = {

    isAuthenticated: false,

    authenticate: () => {
        return true;
    },

    unAuthenticate: () => {
        return false;
    },

    getAuthentication: () => {
        return this.isAuthenticated;
    }
}

export const Authenticate = () => {

    const [ appContext, setAppContext ] = useContext(AppContext);

    const authenticated = () => {
        setAppContext({
            ...appContext,
            user: {
                name: 'Paul',
                role: 'ADMIN',
                authenticated: true
            }
        });
    }

}

export const UnAuthenticate = () => {

    const history = useHistory();

    const { appContext, setAppContext } = useContext(AppContext);

    console.log("Logout")

    setAppContext({
        ...appContext,
        user: {}
    });

    history.push('/login')
}

const PrivateRoute = ({ component: Component, ...rest}) => {

    const { appContext } = useContext(AppContext);

    let auth = false;

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
