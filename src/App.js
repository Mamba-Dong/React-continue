import React from 'react';
import { Layout } from "antd";
import Header from "./page/Header";
import LeftMenu from "./page/LeftMenu";
import Content from './page/Content';
import './App.css'

function App(props) {
    return (
        <Layout className="home" style={{ minHeight: '100vh' }}>
            <Header/>
            <Layout>
                <LeftMenu/>
                <Content />
            </Layout>
        </Layout>
    );
}

export default App;
