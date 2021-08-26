import React, {useEffect, useContext} from 'react';
import {Layout, message} from "antd";
import DeliveryRequest from "../utils/deliveryDisplay/deliveryRequest";
import DeliveriesDisplay from "../utils/deliveryDisplay/deliveriesDisplay";

import { AppContext } from "../../App";
import { getDeliveries } from '../../services/deliveryService';

const HomePage = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    useEffect(() => {
        getDeliveries().then(r => {
            if(r.status === 0){
                setAppContext({
                    ...appContext,
                    deliveriesToMe: r.payload.my_deliveries,
                    myRequest: r.payload.my_requests
                })
                message.success({
                    content: r.message,
                    key,
                    duration: 2
                });
            }else {
                message.error({
                    content: r.message,
                    key,
                    duration: 2
                });
            }
        }).catch(error => {
            console.log("Error", error.message)
            message.error({
                content: error.message,
                key,
                duration: 2
            });
        });
    }, [appContext])

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