import React from 'react';
import { Popover, Button } from "antd";
import { useHistory } from "react-router-dom";
import './Header.scss'

import { UserOutlined } from '@ant-design/icons';

function Header() {
    const history = useHistory()

    const content = (
        <div className="user">
            <div>用户： admin</div>
            <Button type="primary" danger className="logout" onClick={handleLogoutClick}>退出</Button>
        </div>
    )

    return (
        <div className="header">
            <Popover content={content} trigger="click" placement="topRight" arrowPointAtCenter>
                <UserOutlined />
            </Popover>
        </div>
    )

    function handleLogoutClick() {
        history.push({ pathname: '/login' })
    }
}

export default Header;
