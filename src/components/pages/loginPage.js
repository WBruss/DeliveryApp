import React, {useContext} from 'react';
import { useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";

import {Form, Input, Button, message} from 'antd';

import { authenticate } from '../../services/auth';
import {AppContext, UserContext} from "../../App";

const LoginPage = () => {

    const { setUserContext } = useContext(UserContext);

    const [ form ] = Form.useForm();

    const history = useHistory();

    const key = 'updatable';

    const authenticated = (token_decode) => {
        setUserContext({
            name: token_decode.name,
            email: token_decode.email,
            role: token_decode.role,
        })
    }


    const onFinish = (values) => {
        console.log('Success:', values);
        authenticate(values).then(r =>{
            if(r.status === 0){
                localStorage.setItem('token', r.token);
                console.log("JWT: ", jwt_decode(r.token))
                authenticated(jwt_decode(r.token))
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

        form.resetFields();
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

