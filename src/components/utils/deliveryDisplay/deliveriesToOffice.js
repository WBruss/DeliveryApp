import React, {useContext, useEffect} from "react";
import {Table, Button, message} from 'antd';
import {AppContext} from "../../../App";
import {getDeliveryToOffice, receiveDelivery} from "../../../services/deliveryService";

const DeliveriesToOffice = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    const get_Deliveries = async () => {
        getDeliveryToOffice().then(r => {
                if(r.status === 0){
                    console.log("Data ", r.payload)
                    setAppContext({
                        ...appContext,
                        deliveriesToOffice: r.payload,
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
            }

        )


    }


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

    return(
        <>
            <Table columns={columns} dataSource={appContext.deliveriesToOffice} rowKey='id' pagination='false'/>
        </>
    )
}


export default DeliveriesToOffice;