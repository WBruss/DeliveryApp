import React from "react";
import {Table, Tag, Space, Button} from 'antd';

const DeliveriesToMe = () => {
    return(
        <>
           <div className='deliveriesToMePage'>
               <h3>Deliveries To Me</h3>
               <DeliveryItem/>
           </div>
        </>
    )
}


const DeliveryItem = () => {

    function handleReceive(record) {
        console.log("ClickR: ", record)
    }

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
        {
            title: '',
            key: 'receive',
            render: (_, record) =>
                <Button
                    size='small'
                    type=''
                    onClick={() =>
                        handleReceive(record)
                    }
                >
                    Received
                </Button>

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


export default DeliveriesToMe;