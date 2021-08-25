import React, {useState} from 'react';
import {Button, Layout} from "antd";
import DeliveryRequest from "./deliveryRequest";
import DeliveriesDisplay from "./deliveriesDisplay";

const HomePage = () => {


    return(
        <>
            <Layout className='homePage'>
                <Layout className='deliveryRequestHomePage'>
                    <DeliveryRequest/>
                </Layout>
                <Layout className='deliveriesHomePage'>
                    <DeliveriesDisplay/>
                </Layout>
            </Layout>
        </>
    )
}

export default HomePage;