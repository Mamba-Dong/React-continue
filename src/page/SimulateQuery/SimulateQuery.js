import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Input } from 'antd';
import { unUsable } from "../../utils/common";
import './SimulateQuery.scss'

const { Search } = Input

let curPage = 1
let pageSize = 16
let prevY = 600

function SimulateQuery() {
    const [ total, setTotal ] = useState(0)                 // 搜索后数据的数量
    const [ data, setData ] = useState([])                  // 展示的数据
    const [ progressBar, setProgressBar ] = useState(0)     // 进度条
    const [ tempData, setTempData ]  = useState([])         // 搜索后的全部数据
    const [ isFocus, setIsFocus ]  = useState(false)        // 是否点击搜索框
    const listRef = useRef(null)

    /**
     * 监听滚轮滚动，数据懒加载
     * 初始只展示第1页，每页16条数据，当滚轮到达下一页的高度时页数++，展示第2页共32条数据，以此类推
     * 页面只展示600高度的数据，计算出所有数据的最终长度，根据scrollTop计算出此时的数据量占总数据量的百分比
     * 注意：需要判断滚轮是否向下滚动，向上滚动时不能触发下一页的操作
     * **/
    useEffect(() => {
        const getData = throttle(scrollAndLoading, 300)
        const content = listRef.current

        content.addEventListener('scroll', getData, false)
        return () => {
            content.removeEventListener('scroll', getData, false)
        }

        function scrollAndLoading() {
            if(content.scrollTop === 0) {
                setProgressBar(0)
            } else {
                const progressHeight = ((content.scrollTop + 600) / (86 * tempData.length)) * 600
                setProgressBar(progressHeight)
            }

            if(content.scrollTop > (curPage * prevY)) {          // 判断用户是否向下滚动，并在到达下一页前获取下一页数据
                curPage++
                setData(tempData.slice(0, pageSize * curPage))
            }
        }
    }, [data, tempData])

    //随机模拟100000条数据
    const list = useMemo(() => {
        const arr = []
        for (let i = 0; i < 100000; i++) {
            arr.push({
                name: `name_0${i}`,
                title: genrateRandomWords(12),
                text: `我是第${i}个text`,
                tid: `xx_${i}`
            })
        }
        return arr
    }, [])

    /**
     * 设置一个分页，初始为第1页，每页16条数据
     * 点击搜索时，如果搜索内容为空，清除所有数据。有数据时将数据存储起来，截取数据只展示第1页数据
     * **/
    const handleSearch = value => {
        curPage = 1
        listRef.current.scrollTop = 0

        if(unUsable(value)) {
            setTotal(0)
            setData([])
            setTempData([])
        } else {
            const result = list.filter(item => item.title.indexOf(value) !== -1)

            setTotal(result.length)
            setData(result.slice(0, pageSize * curPage))
            setTempData(result)
        }
    }

    return (
        <div className={`demo ${isFocus ? 'focus' : 'blur'}`}>
            <div className="content">
                <div>
                    <Search
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={debounce(handleSearch, 300)}
                        onBlur={() => setIsFocus(false)}
                        onFocus={() => setIsFocus(true)}
                        style={{ width: 500, marginTop: 120 }}
                    />
                </div>
                <div className="txtStyle">
                    { data.length > 0 && `一共搜索到${total}条数据` }
                </div>
                <div className='thumb' style={{ height: progressBar }} />
                <div className="list" ref={listRef}>
                    {
                        data.map(item => {
                            return (
                                <div key={item.tid} className="list_title">
                                    <div>{item.name}</div>
                                    <div>{item.text}</div>
                                    <div>{item.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

    function genrateRandomWords(n) {
        let words = '欢迎来到react之家没有约束的设计没有固定的思维只有天马行空的胡思乱想你来不来xixi',
            len = words.length,
            ret = ''
        for(let i = 0; i < n; i ++) {
            ret += words[Math.floor(Math.random() * len)]
        }
        return ret
    }

    //防抖--给定时间结束后再执行
    function debounce(fn, time) {
        let timeOut = null
        return function () {
            clearTimeout(timeOut)   // 如果持续触发，那么就清除定时器，定时器的回调就不会执行

            timeOut = setTimeout(() => {
                fn.apply(this, arguments)
            }, time)
        }
    }

    //节流--在给定时间内只执行一次
    function throttle(fn, time) {
        let run = true
        return function() {
            if(!run) return  // 如果开关关闭了，那就直接不执行下边的代码
            run = false      // 持续触发的话，run一直是false，就会停在上边的判断那里

            setTimeout(() => {
                fn.apply(this, arguments)
                run = true  // 定时器到时间之后，会把开关打开，我们的函数就会被执行
            }, time);
        }
    }

}

export default SimulateQuery;
