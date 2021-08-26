import React, {useState} from 'react';

import {Form, Input, Button, Select, message} from 'antd';
import {Option} from "antd/es/mentions";
import {useHistory} from "react-router-dom";
import {signUp} from "../../services/auth";

const SignUpPage = () => {

    const [form] = Form.useForm();

    const history = useHistory();

    const key = 'updatable';

    const { popUp, setPopUp } = useState({
        msg: "",
        type: "",
        visible: false
    });

    const onFinish = (values) => {

        message.loading({
            content: "Signing Up",
            key
        })
        form.resetFields();
        console.log('Success:', values);
        signUp(values).then(r => {
            if(r.status === 0){
                message.success({
                    content: r.message,
                    key,
                    duration: 2
                });
                history.push('/')
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



    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div
            className='loginPage'
        >
            {/*<Alert message={popUp.msg} type={popUp.type} />*/}
            <div className='signupForm'>
                <h2 className='formHeader'>Sign Up</h2>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 20,
                    }}
                    wrapperCol={{
                        span: 30,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input
                            addonBefore="+254"
                            style={{
                                width: '100%',
                            }}
                        />
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
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 30,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;

