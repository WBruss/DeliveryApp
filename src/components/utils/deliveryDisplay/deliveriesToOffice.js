import React, {useContext, useEffect} from "react";
import {Table, Button, message} from 'antd';
import {AppContext} from "../../../App";
import axios from "axios";
import {receiveDelivery} from "../../../services/deliveryService";

const DeliveriesToOffice = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    const get_Deliveries = async () => {
        // let deliveries = await getDeliveries();
        let response = await axios.get(`http://localhost:5000/deliveriestooffice/`, {
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

    let num = 1;

    useEffect(() => {
        get_Deliveries()
    }, [])

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

    const key = 'updatable';

    const { appContext, setAppContext } = useContext(AppContext);

    function handleReceive(record) {
        console.log("ClickR: ", record)
        receiveDelivery(record.id).then(r => {
            if(r.status === 0){
                setAppContext({
                    ...appContext,
                    deliveriesToOffice: appContext.deliveriesToOffice.map(delivery => {
                        if( delivery.id === r.payload.id){
                            return  r.payload;
                        }else {
                            return delivery
                        }
                    })
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
            console.log("Error", error.message)
            message.error({
                content: error.message,
                key,
                duration: 2
            });
        });

    }

    const columns = [
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
                    Receive
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
            <Table columns={columns} dataSource={appContext.deliveriesToOffice} rowKey='id' pagination='false'/>
        </>
    )
}


export default DeliveriesToOffice;