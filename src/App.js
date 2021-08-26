import React, { useState } from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from "./components/pages/mainPage";
import jwt_decode from "jwt-decode";

export const AppContext = React.createContext();
export const UserContext = React.createContext();

function App() {
    const [ appContext, setAppContext ] = useState({
        deliveriesToOffice: [],
        myRequest: []
    })


    const [ userContext, setUserContext ] = useState(() => {
            if(localStorage.getItem('token')){
                return jwt_decode(localStorage.getItem('token'))
            }else {
                return {}
            }
        }
    );

    return (
        <div className="App">
            <UserContext.Provider value={{userContext, setUserContext}}>
                <AppContext.Provider value={{appContext, setAppContext}}>
                    <MainPage/>
                </AppContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default App;
