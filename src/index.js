import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Initialize } from "./utils/Initialize";
import reportWebVitals from './reportWebVitals';
import App from './App';
import Login from './Login';
import './index.css';

Initialize()
//BrowserRouter提取到外层中，保证项目中只有一个<Router>
ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route component={App} />
        </Switch>
    </Router>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
