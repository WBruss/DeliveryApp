import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./loginPage";
import '../mainPage.css';

import NavBar from "../utils/navBar";
import {Layout} from "antd";
import SignUpPage from "./signUpPage";
import HomePage from "./homePage";
import { PrivateRoute } from "../utils/privateRouteProvider";
import DeliveryToOfficePage from "./deliveryToOfficePage";
import AdminPage from "./adminPage";
const { Content } = Layout;

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
                                    exact
                                    component={HomePage}
                                />
                                <PrivateRoute
                                    path='/officedeliveries'
                                    exact
                                    component={DeliveryToOfficePage}
                                />
                                <PrivateRoute
                                    path='/admin'
                                    exact
                                    component={AdminPage}
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