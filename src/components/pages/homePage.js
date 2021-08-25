import React from 'react';
import { Layout } from "antd";
import DeliveryRequest from "../utils/deliveryDisplay/deliveryRequest";
import DeliveriesDisplay from "../utils/deliveryDisplay/deliveriesDisplay";

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