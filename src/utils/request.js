import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import Utils from '../utils'
import localforage from 'localforage';

const baseURL = process.env.NODE_ENV === "production" ? "/api/v1" : "http://local.api.com/api/v1"

/**
 * axios发起请求
 * @param config
 * @param params
 * @returns {Promise<unknown>}
 */
export default function (config, data = {}) {
    let cache = true
    if(data.cache !== undefined){
        cache = data.cache
    }else if (config.cache !== undefined){
        cache =  config.cache
    }
    let url = config.url, fromData = {}
    config.method = config.method ? config.method : "GET"
    if (data.path) {
        for (let key in data.path) {
            url = url.replace('{' + key + '}', data.path[key]);
        }
    }

    if (data.params) {
        switch (config.method) {
            case "GET":
                let queryArr = []
                for (let key in data.params) {
                    if (Utils.isObject(data.params[key])) {
                        queryArr.push(qs.stringify({[key]: data.params[key]}, {encode: false}))
                    } else {
                        queryArr.push(key + '=' + data.params[key])
                    }
                }
                url += '?' + queryArr.join('&')
                break;
            case "POST":
                fromData = qs.stringify(data.params)
                break;
            case "PATCH":
                fromData = qs.stringify(data.params)
                break;
        }
    }
    let httpConfig = {
        method: config.method,
        baseURL: baseURL,
        url: url,
        data: fromData,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': Cookies.get('token') ? Utils.decodeEntities(Cookies.get('token')) : ''
        },
    }
    return new Promise((resolve, reject) => {
        axios(httpConfig).then((res) => {
            if (config.method === 'GET'){
                localforage.setItem(url, res.data).catch(function (err) {
                    console.error(err);
                });
            }
            resolve(res.data)
        }).catch((response) => {
            reject(response)
        })
        if (cache && config.method === 'GET'){
            localforage.getItem(url).then(function (value) {
                resolve(value)
            })
        }
    })
}


