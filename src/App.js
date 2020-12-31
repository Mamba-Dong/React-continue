import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Layout } from "antd";
import Header from "./page/Content/Header";
import LeftMenu from "./page/Content/LeftMenu";
import Content from './page/Content/Content';
import './App.css'

function App(props) {
    //BrowserRouter提取到外层中，保证项目中只有一个<Router>
    return (
        <Router>
            <Layout className="home" style={{ minHeight: '100vh' }}>
                <Header/>
                <Layout>
                    <LeftMenu/>
                    <Content />
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
