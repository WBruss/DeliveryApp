import React from "react";
import DeliveriesToMe from "./deliveriesToMe";
import MyDeliveryRequests from "./myDeliveryRequestsToOthers";

const DeliveriesDisplay = () => {
    return(
        <>
            <div className='deliveryDisplay'>
                <DeliveriesToMe/>
                <MyDeliveryRequests/>
            </div>
        </>
    )
};

export default DeliveriesDisplay;