import qs from "qs";

const randomArrItem = items => items[Math.random() * items.length | 0];

function decodeEntities(encodedString) {
    let textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
}

function qsStringifyParams(params) {
    let queryArr = []
    for (let key in params) {
        if (isObject(params[key])) {
            queryArr.push(qs.stringify({[key]: params[key]}, {encode: false}))
        } else {
            queryArr.push(key + '=' + params[key])
        }
    }
    return queryArr.join('&')
}

function qsParseParams(params) {
    return qs.parse(params)
}

function getUrlName(url) {
    let arr = url.split('/')
    return arr[arr.length - 1].split('.')[0]
}

function getGitHunUrl(path) {
    return path.replace("public/assets", 'https://raw.githubusercontent.com/LIU-FH/assets/master')
}

export default {
    isObject,
    randomArrItem,
    decodeEntities,
    qsStringifyParams,
    qsParseParams,
    getUrlName,
    getGitHunUrl,
}
