import React from "react";
import DeliveriesToOffice from "./deliveriesToOffice";
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