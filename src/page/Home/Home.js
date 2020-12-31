import React from 'react';
import './Home.scss';

import wuKong from '../../assets/images/o_wukong.png';

function Home(props) {
    return (
        <div className="home">
            <div className="wuKong">
                <div className="message">妖怪，哪里逃。。嘚儿嘚儿。。</div>
                <div  className="wuKong-img">
                    <img src={wuKong} alt="悟空"/>
                </div>
            </div>
            <div className="baJie" />
            <div className="tangSeng" />
            <div className="shaSeng" />
        </div>
    );
}

export default Home;
