import React from "react";
import { Table} from "antd";

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

    const columns = [
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item'
        },
        {
            title: 'From',
            dataIndex: 'sender',
            key: 'item'
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
            <Table columns={columns} dataSource={dummyData} rowKey='id' pagination='false'/>
        </>
    )
}

export default MyDeliveryRequests;