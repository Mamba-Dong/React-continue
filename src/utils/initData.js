import _ from 'lodash';

let index = 0

export const filterName = function(data) {
    let color, size

    color = colorName(data.variations)

    if(!colorSizeArr(color, data.products)) {
        index++
        filterName(data)
        color = colorName(data.variations)
    }

    size = _.filter(colorSizeArr(color, data.products), v => v.name === '尺码')[0].value

    return { color: color, size: size }
}

function colorSizeArr(color, products) {
    for(let i = 0; i < products.length; i++) {
        for(let j = 0; j < products[i].variationMappings.length; j++) {
            if(products[i].variationMappings[j].value === color) {
                return products[i].variationMappings
            }
        }
    }
}

function colorName(variations) {
    for(let i = 0; i < variations.length; i++) {
        if(variations[i].name === '颜色') {
            return variations[i].values[index].name
        }
    }
}
