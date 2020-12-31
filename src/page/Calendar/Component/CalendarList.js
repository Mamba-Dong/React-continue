import React from 'react';
import _ from 'lodash';
import { Tooltip } from 'rootnet-ui';
import 'rootnet-ui/lib/style.css'
import './CalendarList.scss';
import clsx from "clsx";

export default function CalendarList({ data, className, onClick }){
    return <div className={clsx('calendar-list', className)}>
        {
            _.map(data,(x, i)=>{
                return <div className='calendar-list-item' key={i} onClick={onClick}>
                    <Tooltip title={x.text}>
                        <span>{x.text}</span>
                    </Tooltip>
                </div>
            })
        }
    </div>
}
CalendarList.defaultProps = {
    data: null, //array 属性名为text的列表
}
