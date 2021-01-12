import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import _ from 'lodash';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const menu = [
    { id: 1, icon: PieChartOutlined, title: '首页', url: '/' },
    { id: 2, icon: DesktopOutlined, title: '模糊搜索', url: '/simulateQuery' },
    {
        id: 3,
        icon: UserOutlined,
        title: '数组操作',
        children: [
            {
                id: 31, title: '日常方法', url: '/daily'
            },
            {
                id: 32, title: '复杂嵌套', url: '/complex'
            },
        ]
    },
    {
        id: 4,
        icon: TeamOutlined,
        title: '日历',
        children: [
            {
                id: 41, title: '自制日历', url: '/calendar'
            },
        ]
    },
    { id: 5, icon: FileOutlined, title: '商品选择', url: '/commodityList' }
]

function LeftMenu() {
    const [ collapsed, onCollapse ] = useState(false)

    const defaultKey = useMemo(() => {
        const selectedKey = []
        const openKey = []
        const pathname = window.location.pathname

        _.forEach(menu, value => {
            if(value.url === pathname) {
                selectedKey.push(String(value.id))
                openKey.push(String(value.id))
            } else {
                _.forEach(value.children, item => {
                    if(item.url === pathname) {
                        selectedKey.push(String(item.id))
                        openKey.push(String(value.id))
                    }
                })
            }
        })

        return { selectedKey, openKey }
    }, [])

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={defaultKey.selectedKey} defaultOpenKeys={defaultKey.openKey} mode="inline">
                {
                    menu.map(item => {
                        return item.children ? (
                            <SubMenu key={item.id} icon={<item.icon />} title={item.title}>
                                {
                                    item.children.map(value => {
                                        return <Menu.Item key={value.id}>
                                            <Link to={value.url} replace>{ value.title }</Link>
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        ) : (
                            <Menu.Item key={item.id} icon={<item.icon />}>
                                <Link to={item.url}>{ item.title }</Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        </Sider>
    )
}

export default LeftMenu;
