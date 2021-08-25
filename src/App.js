import React, { useState } from "react";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from "./components/pages/mainPage";

export const AppContext = React.createContext();

function App() {
    const [ appContext, setAppContext ] = useState({
        user: {},
        deliveriesToMe: {},
        myRequest: {}
    })

    return (
        <div className="App">
            <AppContext.Provider value={{appContext, setAppContext}}>
                <MainPage/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
