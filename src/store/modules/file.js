import axios from "axios";
import localforage from 'localforage';
// import {Notice} from 'view-design';
import _ from 'lodash'

const baseURL = process.env.NODE_ENV === "production" ? "/api/v1" : "http://local.api.com/api/v1"

const state = {};
const getters = {};
const mutations = {};
const actions = {};

state.fileUpload = []
getters.fileUploadData = function (state) {
    return state.fileUpload
}

mutations.fileUpload = function (state, params) {
    let files = _.clone(state.fileUpload)
    files.push(params)
    state.fileUpload = files
    Notice.success({
        title: '提示消息',
        desc: "上传任务创建成功"
    });
    localforage.getItem(params.key).then(function (value) {
        let formData = new FormData();
        formData.append(params.type, value, params.name);
        if (params.id) {
            formData.append('id', params.id);
        }
        axios({
            method: "POST",
            baseURL: baseURL,
            url: "/file",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json"
            }
        }).then(() => {
            localforage.removeItem(params.key)
            localforage.removeItem("/file/" + params.type)
            state.fileUpload = _.remove(files, [params]);
            Notice.success({
                title: '提示消息',
                desc: params.name + "上传成功"
            });
        });
    })
}
actions.fileUpload = function ({commit}, params) {
    commit("fileUpload", params)
}
export default {
    state, getters, mutations, actions
}
