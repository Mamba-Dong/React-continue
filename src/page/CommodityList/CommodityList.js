import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { MockData } from "./MockData";
import { filterName } from "../../utils/initData";
import _ from 'lodash';
import './CommodityList.scss'

//图片需先引入后才能使用
import JBL from '../../assets/images/xie/jianbianlan.jpg'
import SHJ from '../../assets/images/xie/shenhuiyou.jpg'
import MBL from '../../assets/images/xie/mibailv.jpg'
import LJR from '../../assets/images/xie/lanjuren.jpg'
import HB from '../../assets/images/xie/huibai.jpg'
import THB from '../../assets/images/xie/tanhuibai.jpg'
import BKF from '../../assets/images/xie/beikefen.jpg'
import HH from '../../assets/images/xie/heihong.jpg'
import HJL from '../../assets/images/xie/haijunlan.jpg'
import MGDZ from '../../assets/images/xie/meiguoduizhang.jpg'

const imgList = [
    {
        name: "SK真皮574渐变蓝",
        img: JBL
    },
    {
        name: "SK真皮574深灰橘",
        img: SHJ
    },
    {
        name: "SK真皮574米白绿",
        img: MBL
    },
    {
        name: "SK真皮574蓝巨人",
        img: LJR
    }, {
        name: "SK真皮574灰白",
        img: HB
    },
    {
        name: "SK真皮574炭灰白",
        img: THB
    }, {
        name: "限量版574贝壳粉",
        img: BKF
    },
    {
        name: "限量版574黑红",
        img: HH
    },
    {
        name: "限量版574海军蓝",
        img: HJL
    },
    {
        name: "限量版574美国队长",
        img: MGDZ
    }
]

const data = MockData()

function CommodityList() {
    const [ variations, setVariations ] = useState(data.variations)
    const [ chooseList, setChooseList ] = useState([])
    const [ name, setName ] = useState()
    const [ color, setColor ] = useState()
    const [ size, setSize ] = useState()

    useEffect(() => {
        if(_.isNil(variations)) return

        _.forEach(variations, list => {
            if(list.name === '颜色') {
                setColor(filterName(data).color)
            } else {
                setSize(filterName(data).size)
            }

            _.forEach(list.values, item => {
                item.disabled = false
            })
        })

        setVariations(variations)
    }, [ variations ])

    // 初始展示的颜色、尺码列表
    useEffect(() => {
        const arr = [], variationList = []

        _.forEach(data.products, list => {
            _.forEach(list.variationMappings, item => {
                if(item.value === filterName(data).size) {
                    const size = _.filter(list.variationMappings, i => i.name === '颜色')
                    _.forEach(size, v => {
                        arr.push(v.value)
                    })
                }
                if(item.value === filterName(data).color) {
                    const color = _.filter(list.variationMappings, i => i.name === '尺码')
                    _.forEach(color, v => {
                        variationList.push(v.value)
                    })
                }
            })
        })

        setChooseList([ ...arr, ...variationList ])
    }, [])

    // 展示商品的价格、库存
    const goods = useMemo(() => {
        let arr = {}
        _.forEach(data.products, list => {
            _.forEach(list.variationMappings, item => {
                if(item.value === color) {
                    _.forEach(list.variationMappings, item => {
                        if(item.value === size) {
                            arr = list
                        }
                    })
                }
            })
        })

        return arr
    }, [ color, size ])

    // 通过选择颜色和尺码切换哪些可选
    const optionList = useMemo(() => {
        return _.forEach(variations, list => {
            if(list.name !== name) {
                _.forEach(list.values, item => {
                    item.disabled = !_.includes(chooseList, item.name)
                })
            }
        })
    }, [ name, variations, chooseList ])

    // 选择不同的商品展示对应的图片
    const initImg = useMemo(() => {
        if(_.isNil(color)) return { img: '', name: '' }
        const imgArr = _.filter(imgList, item => item.name === color)[0]

        return { img: imgArr.img, name: imgArr.name }
    }, [ color ])

    return (
        <div className="commodity-list">
            <div className="main">
                <div className="shoe">
                    <div className="shoe-img">
                        <img src={initImg.img} alt={initImg.name}/>
                    </div>
                    <div className="shoe-title">
                        <div className="shoe-title-price">
                            <span className="shoe-title-price-normal"><span
                                style={{ fontSize: 12 }}>￥</span>{goods.price}</span>
                            <span className="shoe-title-price-discounts">券后￥{goods.price - 10}.00</span>
                        </div>
                        <div className="shoe-title-coins">淘金币可抵6.24元</div>
                        <div className="shoe-title-inventory">库存{goods.inventory}件</div>
                        <div className="shoe-title-choose">已选：{goodsString(color)}{goodsString(size)}</div>
                    </div>
                </div>
                <div className="footer">
                    {
                        _.map(optionList, (list, index) => {
                            return (
                                <div key={index} className="options">
                                    <div className="options-color">
                                        { list.name }
                                    </div>
                                    <div className="options-size">
                                        {
                                            _.map(list.values, (item, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        {
                                                            <div
                                                                className={`options-size-item ${item.disabled ? 'options-size-disabled' : 'options-size-normal'} ${(color === item.name || size === item.name) && 'options-size-clickItem'}`}
                                                                onClick={() => !item.disabled && handleColorSizeClick(list.name, item.name)}>
                                                                { item.name }
                                                            </div>
                                                        }
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

    // 已选商品加“”后显示
    function goodsString(value) {
        if(_.isNil(value)) return ''
        return `"${value}"`
    }

    // 选择颜色和尺码
    function handleColorSizeClick(type, typeData) {
        const arr = []
        _.forEach(data.products, list => {
            _.forEach(list.variationMappings, item => {
                if(item.value === typeData) {
                    const size = _.filter(list.variationMappings, i => i.name === (type === '颜色' ? '尺码' : '颜色'))
                    _.forEach(size, v => arr.push(v.value))
                }
            })
        })

        setName(type)
        setChooseList(arr)
        type === '颜色' ? setColor(typeData) : setSize(typeData)
    }
}

export default CommodityList
