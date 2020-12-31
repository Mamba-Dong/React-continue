import React from 'react';
import { Calendar } from "rootnet-edit";
import clsx from "clsx";
import './FullCalender.scss'

function FullCalender(props){
    const { className, dateCellRender, ...rest } = props;

    function handleDateCellRender(date){
        //...这里是需要写的公用处理逻辑
        return <div className="full-render">
            <div className="full-date">
                { date.getDate() }
            </div>
            { dateCellRender && dateCellRender(date) }
        </div>
    }

    //full类名用于书写独立样式
    return (
        <Calendar className={clsx('full',className)} dataRender={handleDateCellRender} {...rest}/>
    )
}
FullCalender.defaultProps = {
    dateCellRender: null, //{function} 可插入列表到当前日期表格内
}

export default FullCalender
