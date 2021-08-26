import React, {useEffect, useContext, useState} from 'react';
import {Layout, message} from "antd";
import DeliveryRequest from "../utils/deliveryDisplay/deliveryRequest";
import DeliveriesDisplay from "../utils/deliveryDisplay/deliveriesDisplay";

import { AppContext } from "../../App";
import { getDeliveries } from '../../services/deliveryService';
import axios from "axios";

const HomePage = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    const get_Deliveries = async () => {
        // let deliveries = await getDeliveries();
        let response = await axios.get(`http://localhost:5000/mydeliveryrequests/`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });

        let deliveries = response.data;

        console.log("Data ", deliveries.payload)

        if(deliveries.status === 0){
            setAppContext({
                ...appContext,
                myRequest: deliveries.payload,
            })
            message.success({
                content: deliveries.message,
                key,
                duration: 2
            });
        }else {
            message.error({
                content: deliveries.message,
                key,
                duration: 2
            });
        }
    }

    let num = 1;

    useEffect(() => {
        get_Deliveries()
    }, [])

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