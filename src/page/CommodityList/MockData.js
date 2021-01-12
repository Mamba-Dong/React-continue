export function MockData() {
    let mockData;
    mockData = {
        // variations存放的是所有选项
        variations: [
            {
                name: '颜色',
                values: [
                    { name: 'SK真皮574渐变蓝' },
                    { name: 'SK真皮574深灰橘' },
                    { name: 'SK真皮574米白绿' },
                    { name: 'SK真皮574蓝巨人' },
                    { name: 'SK真皮574灰白' },
                    { name: 'SK真皮574炭灰白' },
                    { name: '限量版574贝壳粉' },
                    { name: '限量版574黑红' },
                    { name: '限量版574海军蓝' },
                    { name: '限量版574美国队长' },
                ]
            },
            {
                name: '尺码',
                values: [
                    { name: '36' },
                    { name: '37' },
                    { name: '38' },
                    { name: '39' },
                    { name: '40' },
                    { name: '41' },
                    { name: '42' },
                    { name: '43' },
                    { name: '44' },
                    { name: '45' },
                ]
            },
        ],
        // products数组存放的是所有商品
        products: [
            {
                id: 1,
                price: 208,
                inventory: 999,
                // 与上面variations的对应关系在每个商品的variationMappings里面
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 2,
                price: 208,
                inventory: 99,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 3,
                price: 208,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 4,
                price: 208,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 5,
                price: 208,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 6,
                price: 208,
                inventory: 545,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574渐变蓝' },
                    { name: '尺码', value: '43' },
                ]
            },
            {
                id: 7,
                price: 199,
                inventory: 59,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574深灰橘' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 8,
                price: 199,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574深灰橘' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 9,
                price: 199,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574深灰橘' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 10,
                price: 199,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574深灰橘' },
                    { name: '尺码', value: '43' },
                ]
            },
            {
                id: 11,
                price: 229,
                inventory: 529,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574米白绿' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 12,
                price: 229,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574米白绿' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 13,
                price: 229,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574米白绿' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 14,
                price: 229,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574米白绿' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 15,
                price: 299,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: '限量版574贝壳粉' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 16,
                price: 299,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: '限量版574贝壳粉' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 17,
                price: 299,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: '限量版574贝壳粉' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 18,
                price: 219,
                inventory: 129,
                variationMappings: [
                    { name: '颜色', value: '限量版574海军蓝' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 19,
                price: 219,
                inventory: 90,
                variationMappings: [
                    { name: '颜色', value: '限量版574海军蓝' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 20,
                price: 219,
                inventory: 11,
                variationMappings: [
                    { name: '颜色', value: '限量版574海军蓝' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 21,
                price: 219,
                inventory: 99,
                variationMappings: [
                    { name: '颜色', value: '限量版574海军蓝' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 22,
                price: 219,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: '限量版574海军蓝' },
                    { name: '尺码', value: '42' },
                ]
            },

            {
                id: 23,
                price: 198,
                inventory: 99,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '36' },
                ]
            },
            {
                id: 24,
                price: 198,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '37' },
                ]
            },
            {
                id: 25,
                price: 198,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 26,
                price: 198,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 27,
                price: 198,
                inventory: 545,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 28,
                price: 198,
                inventory: 59,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 29,
                price: 198,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 30,
                price: 198,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574蓝巨人' },
                    { name: '尺码', value: '43' },
                ]
            },
            {
                id: 31,
                price: 159,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '36' },
                ]
            },
            {
                id: 32,
                price: 159,
                inventory: 529,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '37' },
                ]
            },
            {
                id: 33,
                price: 159,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 34,
                price: 159,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 35,
                price: 159,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 36,
                price: 159,
                inventory: 101,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 37,
                price: 159,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 38,
                price: 159,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574灰白' },
                    { name: '尺码', value: '43' },
                ]
            },

            {
                id: 39,
                price: 189,
                inventory: 129,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574炭灰白' },
                    { name: '尺码', value: '38' },
                ]
            },
            {
                id: 40,
                price: 189,
                inventory: 90,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574炭灰白' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 41,
                price: 189,
                inventory: 110,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574炭灰白' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 42,
                price: 189,
                inventory: 99,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574炭灰白' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 43,
                price: 189,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: 'SK真皮574炭灰白' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 44,
                price: 249,
                inventory: 199,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '36' },
                ]
            },
            {
                id: 45,
                price: 249,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '37' },
                ]
            },

            {
                id: 46,
                price: 249,
                inventory: 129,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '39' },
                ]
            },
            {
                id: 47,
                price: 249,
                inventory: 90,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '40' },
                ]
            },
            {
                id: 48,
                price: 249,
                inventory: 110,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '41' },
                ]
            },
            {
                id: 49,
                price: 249,
                inventory: 99,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '42' },
                ]
            },
            {
                id: 50,
                price: 249,
                inventory: 909,
                variationMappings: [
                    { name: '颜色', value: '限量版574美国队长' },
                    { name: '尺码', value: '43' },
                ]
            },
        ]
    };

    return mockData
}
