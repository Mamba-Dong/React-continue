import React, { useState, useMemo } from 'react';
import { Select, Button } from 'antd';
import { addZero, formatDate } from '../../utils/common'
import './Calendar.scss'

const { Option } = Select;

const weekList = ['一','二','三','四','五','六','日']
const monthList = Array.from(Array(12),(x, i)=>`${i + 1}月`);

function Calendar() {
    const today = new Date()
    const [ chooseToday, setChooseToday ] = useState(formatDate(today))
    const [ weekView, setWeekView ] = useState(today)
    const [ year, setYear ] = useState(today.getFullYear())
    const [ month, setMonth ] = useState(today.getMonth())

    const todayWeek = "今天是星期" + "日一二三四五六".charAt(weekView.getDay());

    //年份列表
    const yearOption = useMemo(() => {
        const yearList = []
        for(let i = 1920; i <= 2120; i++) {
            yearList.push(<Option key={i}>{i}</Option>)
        }
        return yearList
    }, [])

    //月份列表
    const monthOption = useMemo(() => {
        const option = []
        monthList.map(value => {
            return option.push(<Option key={value}>{value}</Option>)
        })
        return option
    }, [])

    /**
     * 日历核心代码
     * 通过计算当前年是闰年还是平年判断2月有多少天
     * 构建出一个6×7的表格，首先判断出当前月的第一天是星期几，通过星期几和当天的下标计算出第一天在表格中位置，然后依次向后渲染出当月所有的天数
     * 根据当月第一天是星期几、下标、前一个月天数计算出需要展示的前一月最后多少天
     * 本月后的日期可直接按照下标及某个月的天数依次渲染即可
     * 注意：表格的下标不等于当前日期。例如：点击12月25日时需要将25传递给点击事件，但此时25日的下标不一定是25，需要通过第一天是星期几和下标共同计算
     * **/
    const day = useMemo(() => {
        let k = 0,j = 0
        const dayList = []
        const everyMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]     //每个月有几天
        const firstMonthDay = new Date(year, month, 1).getDay()                                   //每个月第一天是周几

        for(let i = 0; i < 42; i++) {
            if(weekIndex(firstMonthDay) - 1 > i) {                      //本月前
                let bef = monthHasDay(month === 0 ? 11 : month - 1).length - weekIndex(firstMonthDay) + i + 1
                let day = monthHasDay(month === 0 ? 11 : month - 1)[bef]

                dayList.push(
                    <div className="day-item day-disable day-hover" key={i} onClick={() => handleBeforeMonthClick(day)}>
                    { day }
                    </div>
                )
            } else if(everyMonth[month] + weekIndex(firstMonthDay) - 2 < i) {           //本月后
                let day = monthHasDay(0)[j]

                dayList.push(
                    <div className="day-item day-disable day-hover" key={i} onClick={() => handleNextMonthClick(day)}>
                        { day }
                    </div>
                )
                j++
            } else {                             //本月
                let index = i - weekIndex(firstMonthDay) + 2                               //点击的日期
                let clickDate = `${year}-${addZero(month + 1)}-${addZero(index)}`    //点击的年月日

                dayList.push(
                    <div className={`day-item ${chooseToday !== clickDate && 'day-hover'} ${chooseToday === clickDate && 'day-click'} ${formatDate(new Date()) === clickDate && 'today-this'}`} key={i}
                         onClick={() => handleDayClick(index)}>
                        { monthHasDay(month)[k] }
                    </div>
                )
                k++
            }
        }

        return dayList

        //某个月有几天
        function monthHasDay(month) {
            const day = []
            for(let i = 1; i <= everyMonth[month]; i++) {
                day.push(addZero(i))
            }
            return day
        }

        //点击日期
        function handleDayClick(day) {
            const date = `${year}-${addZero(month + 1)}-${addZero(day)}`
            setChooseToday(date)
            setWeekView(new Date(date))
        }

        //点击本月前的日期--1月前切换到前一年12月
        function handleBeforeMonthClick(day) {
            if(month === 0) {
                const date = `${year - 1}-${addZero(12)}-${day}`
                setMonth(11)
                setYear(year - 1)
                setChooseToday(date)
                setWeekView(new Date(date))
            } else {
                const date = `${year}-${addZero(month)}-${day}`
                setMonth(month - 1)
                setChooseToday(date)
                setWeekView(new Date(date))
            }
        }

        //点击本月后的日期--12月后切换到下一年1月
        function handleNextMonthClick(day) {
            if(month === 11) {
                const date = `${year + 1}-${addZero(1)}-${day}`
                setMonth(0)
                setYear(year + 1)
                setChooseToday(date)
                setWeekView(new Date(date))
            } else {
                const date = `${year}-${addZero(month + 2)}-${day}`
                setMonth(month + 1)
                setChooseToday(date)
                setWeekView(new Date(date))
            }
        }
    }, [year, month, chooseToday])

    return (
        <div className="calendar">
            <div className="content">
                <div className="header">
                    你选择的日期是：{chooseToday} { todayWeek }
                </div>
                <div className="select">
                    <Select style={{ width: 120, marginRight: 10 }} value={year.toString()} onChange={v => setYear(v)}>
                        { yearOption }
                    </Select>
                    <Select style={{ width: 120, marginRight: 10 }} value={(month + 1) + '月'} onChange={v => setMonth((v).split('月')[0] - 1)}>
                        { monthOption }
                    </Select>
                    <Button type="primary">月</Button>
                    <Button>年</Button>
                </div>
                <div className="week">
                    {
                        weekList.map(value => {
                            return <div key={value} className="week-item">{value}</div>
                        })
                    }
                </div>
                <div className="day">{ day.map(v => v) }</div>
            </div>
        </div>
    )

    // 判断是否是闰年
    function isLeapYear(year){
        return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))
    }

    // 判断这一天是周几
    function weekIndex(value) {
        return value === 0 ? 7 : value     // 为0时代表周日
    }
}

export default Calendar
