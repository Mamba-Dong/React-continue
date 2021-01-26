import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Input, Button, message } from 'antd';
import { unUsable } from "./utils/common";
import './Login.scss'

import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

function Login() {
    const [ user, setUser ] = useState()
    const [ password, setPassword ] = useState()
    const history = useHistory()

    return(
        <div className="login">
            <div className="content">
                <div className="content-left"/>
                <div className="content-right">
                    <div className="title">科技改变生活</div>
                    <Input placeholder="用户名" value={user} onChange={e => setUser(e.target.value)} prefix={<UserOutlined />}/>
                    <Input placeholder="密码" type={"password"} value={password} onChange={e => setPassword(e.target.value)} prefix={<UnlockOutlined />}/>
                    <Button className="loginBtn" onClick={handleLoginClick}>登录</Button>
                </div>
            </div>
        </div>
    )

    function handleLoginClick() {
        if(unUsable(user) || user !== 'admin') return message.error('请输入正确的用户名')
        if(unUsable(password) || password !== 'admin') return message.error('请输入正确的密码')
        history.push({ pathname: '/home' })
    }
}

export default Login
