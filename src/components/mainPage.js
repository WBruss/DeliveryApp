import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./loginPage";
import './mainPage.css';

import Navbar from 'react-bootstrap/Navbar'
import NavBar from "./navBar";
import {Layout} from "antd";
import SignUpPage from "./signUpPage";
import HomePage from "./homePage";
import PrivateRoute from "./auth";
const { Header, Content, Footer, Sider } = Layout;

// Main imports

const MainPage = () => {
    return(
        <>
            <BrowserRouter>
                <Layout
                    className='pageLayout'
                >
                    <NavBar className='header'/>
                    <Layout
                        className='contentLayout'
                    >
                        <Content
                            className='content'
                        >
                            <Switch>
                                <Route path='/login'>
                                    <LoginPage/>
                                </Route>
                                <Route path='/signup'>
                                    <SignUpPage/>
                                </Route>
                                <PrivateRoute
                                    path='/'
                                    component={HomePage}
                                />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </BrowserRouter>
        </>
    )
}

export default MainPage;