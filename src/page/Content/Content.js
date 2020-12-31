import React from 'react';
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import SimulateQuery from "../SimulateQuery/SimulateQuery";
import Daily from "../ArrayOperate/Daily";
import Complex from "../ArrayOperate/Complex";
import Calendar from "../Calendar/Calendar";

function Content(props) {
    return (
        <Layout className="site-layout">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/simulateQuery" component={SimulateQuery} />
                <Route exact path="/daily" component={Daily} />
                <Route exact path="/complex" component={Complex} />
                <Route exact path="/calendar" component={Calendar} />
            </Switch>
        </Layout>
    );
}

export default Content;
