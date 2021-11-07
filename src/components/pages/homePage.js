import React, {useEffect, useContext} from 'react';
import {Layout, message} from "antd";
import DeliveryRequest from "../utils/deliveryDisplay/deliveryRequest";
import DeliveriesDisplay from "../utils/deliveryDisplay/deliveriesDisplay";

import { AppContext } from "../../App";
import { getDeliveries } from '../../services/deliveryService';

const HomePage = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    const get_Deliveries = async () => {
        // let deliveries = await getDeliveries();
        // let response = await axios.get(`http://localhost:5000/mydeliveryrequests/`, {
        //     headers: {
        //         Authorization: localStorage.getItem('token')
        //     }
        // });
        getDeliveries().then(r => {
            if(r.status === 0){
                console.log("Data ", r.payload)
                setAppContext({
                    ...appContext,
                    myRequest: r.payload,
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
            console.log("Home Error ", error)
        })
    }

    useEffect(() => {
        console.log("Get Deliveries")
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