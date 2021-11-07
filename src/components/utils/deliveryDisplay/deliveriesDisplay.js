import React from "react";
import MyDeliveryRequests from "./myDeliveryRequestsToOthers";

const DeliveriesDisplay = () => {
    return(
        <>
            <div className='deliveryDisplay'>
                {/*<DeliveriesToOffice/>*/}
                <MyDeliveryRequests/>
            </div>
        </>
    )
};

export default DeliveriesDisplay;