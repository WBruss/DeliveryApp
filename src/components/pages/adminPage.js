import React from 'react';
import AdminDeliveries from "../utils/deliveryDisplay/adminDeliveries";
import {Layout} from "antd";

const AdminPage = () => {

    return(
        <>
            <Layout className='homePage'>
                <AdminDeliveries className='deliveriesToMePage' />
            </Layout>
        </>
    )
}

export default AdminPage;