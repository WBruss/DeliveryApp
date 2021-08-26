import React from 'react';
import DeliveriesToOffice from "../utils/deliveryDisplay/deliveriesToOffice";
import {Layout} from "antd";

const DeliveryToOfficePage = () => {

    return(
        <>
            <Layout className='homePage'>
                <DeliveriesToOffice className='deliveriesToMePage' />
            </Layout>
        </>
    )
}

export default DeliveryToOfficePage;