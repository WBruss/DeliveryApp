import React, {useContext} from "react";
import { Table} from "antd";
import {AppContext} from "../../../App";

const MyDeliveryRequests = () => {
    return(
        <>
            <div className='myDeliveryRequestPage'>
                <h3>My Requests</h3>
                <DeliveryItem/>
            </div>
        </>
    )
}

const DeliveryItem = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item'
        },
        {
            title: 'To',
            dataIndex: 'receiver',
            key: 'receiver'
        },
        {
            title: 'Office',
            dataIndex: 'office',
            key: 'office'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
    ]

    const dummyData = [
        {
            id: 1,
            item: 'Paper',
            sender: 'Evans',
            status: 'Pending'
        },
        {
            id: 2,
            item: 'Paper',
            sender: 'Evans',
            status: 'Pending'
        },
        {
            id: 3,
            item: 'Paper',
            sender: 'Evans',
            status: 'Pending'
        },
        {
            id:4,
            item: 'Paper',
            sender: 'Evans',
            status: 'Pending'
        },
    ]
    return(
        <>
            <Table columns={columns} dataSource={appContext.myRequest} rowKey='id' pagination='false'/>
        </>
    )
}

export default MyDeliveryRequests;