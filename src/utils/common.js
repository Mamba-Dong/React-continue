// 判断值是否为undefined、null、‘’
export function unUsable(props) {
    if(props === 'undefined' || props === null || props === '') return true
}

// 中国标准时间转化为 年-月-日 时-分-秒
export function formatDateTime(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
}

// 中国标准时间转化为 年-月-日
export function formatDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    return y + '-' + m + '-' + d;
}

//小于10的数字前面加'0'
export function addZero(value) {
    return value < 10 ? '0' + value : value
}
