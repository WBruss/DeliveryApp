import React, {useContext} from 'react';
import {Redirect, useHistory} from "react-router-dom";

import { Form, Input, Button } from 'antd';

import { Auth } from './auth';
import {AppContext} from "../App";

const LoginPage = () => {

    const { appContext, setAppContext } = useContext(AppContext);

    const history = useHistory();

    const authenticated = () => {
        setAppContext({
            ...appContext,
            user: {
                name: 'Paul',
                role: 'ADMIN',
                authenticated: true
            }
        })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        if(Auth.authenticate()){
            console.log("Authenticate")
            authenticated()
            history.push('/')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div
            className='loginPage'
        >
            <div className='loginForm'>
                <h2 className='formHeader'>Login</h2>
                <Form
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
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
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
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;

