/**
 * str1 比 str2 大则返回 1 ； str1 比 str2 小则返回 -1；相等返回 0
 *
 * @author CaoMeiYouRen
 * @date 2022-07-27
 * @param str1 {string}
 * @param str2 {string}
 */
function versionCompare(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new Error('传入的版本号必须为字符串')
    }
    // 第一步：使用正则，先把传参进来的两个版本号中空格给替换成空。
    let nStr1 = str1.replace(/(^\s+)|(\s+$)/gi, '')
    let nStr2 = str2.replace(/(^\s+)|(\s+$)/gi, '')
    // 第三步：使用正则来匹配截取两个传进来的版本号中的版本数字
    const req = /\d(\.|\d)*\d/gi // 这个是匹配**.**.**数字的正则
    nStr1 = nStr1.match(req)[0] // match出来的是一个数组，这个匹配出来在第0个
    nStr2 = nStr2.match(req)[0]
    // 第四步：版本比较，先把版本号字符串切割成数组，[主版本号，次版本号，修订号]
    const arr1 = nStr1.split('.').map(e => parseInt(e)) // [**,**,**]
    const arr2 = nStr2.split('.').map(e => parseInt(e))
    // 第五步：分别开始分情况比较版本号
    const n = Math.min(arr1.length, arr2.length)
    for (let i = 0; i < n; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        }
        if (arr1[i] < arr2[i]) {
            return -1
        }
    }
    if (arr1.length > arr2.length && arr1[n] > 0) {
        return 1
    }
    if (arr1.length < arr2.length && arr2[n] > 0) {
        return -1
    }
    return 0
}

module.exports = {
    versionCompare,
}
