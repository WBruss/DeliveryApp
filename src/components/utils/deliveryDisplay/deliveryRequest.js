import React, {useContext, useState} from 'react';

import { createDelivery } from '../../../services/deliveryService';

import {Form, Input, Button, Modal, Select, message} from 'antd';
import {AppContext} from "../../../App";
const {Option} = Select;

const DeliveryRequest = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const key = 'updatable';

    const [ visible, setVisible ] = useState(false);
    const onCreateDeliveryRequest = (values) => {
        console.log('Delivery Request: ', values);
        setVisible(false);
        createDelivery(values).then(r => {
        if(r.status === 0){
            setAppContext({
                ...appContext,
                myRequest: [r.payload, ...appContext.myRequest]
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
        console.log("Error ", error.message)
        message.error({
            content: error.message,
            key,
            duration: 2
        });
    });
    }

    return(
        <>
            <div className='deliveryRequest'>
                <Button
                    className='requestButton'
                    type='primary'
                    onClick={() => {
                        setVisible(true)
                    }}
                >
                    Request Delivery
                </Button>
                <DeliveryRequestForm
                    visible={visible}
                    onCancel={() => {
                        setVisible(false)
                    }}
                    onCreate={onCreateDeliveryRequest}
                />
            </div>
        </>
    )
}

const DeliveryRequestForm = ({ visible, onCreate, onCancel }) => {

    const [ form ] = Form.useForm();

    return (
        <>
            <Modal
                visible={visible}
                title='Delivery Request'
                okText='Request'
                cancelText='Cancel'
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate failed ', info)
                        })
                }}
            >
                <div className='deliveryRequest'>
                    <div className='signupForm'>
                        <Form
                            form={form}
                            name='deliveryRequest'
                            layout='vertical'

                        >
                            <Form.Item
                                label='Deliver To'
                                name='receiver'
                                rules={
                                    [
                                        {required: true, message: "Please enter Person to deliver to"}
                                    ]
                                }
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                name="office"
                                label="Office"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select office"
                                    allowClear
                                >
                                    <Option value="Chairman of Department's Office">Chairman of Department's Office</Option>
                                    <Option value="Dean's Office">Dean's Office</Option>
                                    <Option value="Principal's Office">Principal's Office</Option>
                                    <Option value="EMB 103">EMB 103</Option>
                                    <Option value="EMB 104">EMB 104</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label='Item'
                                name='item'
                                rules={
                                    [
                                        {required: true, message: "Please enter Item to be delivered"}
                                    ]
                                }
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    )
};

export default DeliveryRequest;

