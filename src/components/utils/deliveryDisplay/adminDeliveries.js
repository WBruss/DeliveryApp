import React, {useContext, useEffect} from "react";
import {Table, message} from 'antd';
import {AppContext} from "../../../App";
import axios from "axios";

const AdminDeliveries = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';


    const get_Deliveries = async () => {
        let response = await axios.get(`http://localhost:5000/deliveriesadmin/`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        });

        let deliveries = response.data;

        console.log("Data ", deliveries.payload)

        if(deliveries.status === 0){
            setAppContext({
                ...appContext,
                deliveriesToOffice: deliveries.payload,
            })
            message.success({
                content: deliveries.message,
                key,
                duration: 2
            });
        }else {
            message.error({
                content: deliveries.message,
                key,
                duration: 2
            });
        }
    }


    useEffect(() => {
        get_Deliveries()
    })

    return(
        <>
            <div className='deliveriesToMePage'>
                <h3>Deliveries To Office</h3>
                <DeliveryItem/>
            </div>
        </>
    )
}


const DeliveryItem = () => {

    const { appContext } = useContext(AppContext);


    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Item',
            dataIndex: 'item',
            key: 'item'
        },
        {
            title: 'From',
            // dataIndex: 'requested_by',
            key: 'sender',
            render: (_, record) => record.requested_by.name
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

    return(
        <>
            <Table columns={columns} dataSource={appContext.deliveriesToOffice} rowKey='id' pagination='false'/>
        </>
    )
}


export default AdminDeliveries;