import React from 'react';
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import SimulateQuery from "./SimulateQuery/SimulateQuery";
import Daily from "./ArrayOperate/Daily";
import Complex from "./ArrayOperate/Complex";
import Calendar from "./Calendar/Calendar";
import CommodityList from "./CommodityList/CommodityList"
import Abnormal from "./Abnormal/Abnormal";

function Content(props) {
    return (
        <Layout className="site-layout">
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/simulateQuery" component={SimulateQuery} />
                <Route exact path="/daily" component={Daily} />
                <Route exact path="/complex" component={Complex} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/commodityList" component={CommodityList} />
                <Abnormal/>
            </Switch>
        </Layout>
    );
}

export default Content;
