/**
 * @desc webpack打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')

const addClass = require('./class/addClass')
const hasClass = require('./class/hasClass')
const removeClass = require('./class/removeClass')

const getCookie = require('./cookie/getCookie')
const removeCookie = require('./cookie/removeCookie')
const setCookie = require('./cookie/setCookie')

const getOS = require('./device/getOS')
const getExplore = require('./device/getExplore')

const getClientHeight = require('./dom/getClientHeight')
const getClientWidth = require('./dom/getClientWidth')
const getScrollTop = require('./dom/getScrollTop')
const offset = require('./dom/offset')
const scrollTo = require('./dom/scrollTo')
const setScrollTop = require('./dom/setScrollTop')

const getKeyName = require('./keycode/getKeyName')

const deepClone = require('./object/deepClone')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isIdCard = require('./regexp/isIdCard')
const isPhoneNum = require('./regexp/isPhoneNum')
const isUrl = require('./regexp/isUrl')

const digitUppercase = require('./string/digitUppercase')

const formatPassTime = require('./time/formatPassTime')
const formatRemainTime = require('./time/formatRemainTime')

const parseQueryString = require('./url/parseQueryString')
const stringfyQueryString = require('./url/stringfyQueryString')


module.exports = {
    arrayEqual,

    addClass,
    hasClass,
    removeClass,

    getCookie,
    removeCookie,
    setCookie,

    getOS,
    getExplore,

    getClientHeight,
    getClientWidth,
    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,

    getKeyName,

    deepClone,

    randomColor,
    randomNum,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,

    digitUppercase,

    formatPassTime,
    formatRemainTime,
    parseQueryString,
    stringfyQueryString,
}