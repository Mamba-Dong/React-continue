import React from 'react';
import FullCalender from "./FullCalender";
import CalendarList from "./CalendarList";
import './ViewCalender.scss'

const data =  Array.from(Array(10),(x, i)=>({
    text:`这是第${i + 1}条信息`.repeat(11)
}));

const handleDataRenderClick = () => {
    console.log('data',data)
}

function dataRender(date){
    if(compareDate(date,new Date())) return <CalendarList data={data} onClick={handleDataRenderClick}/>
    return null;
}

//compareDate :: (Date,Date) => Boolean
function compareDate(d1,d2){
    return ['getFullYear','getMonth','getDate'].every(x => d1[x]() === d2[x]());
}

function ViewCalender() {
    return (
        <div className="viewCalender">
            <FullCalender dateCellRender={dataRender}/>
        </div>
    )
}

export default ViewCalender
