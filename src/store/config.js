import Cookies from 'js-cookie'
import localforage from 'localforage'
import Utils from '../utils'
import _ from 'lodash'

export default {
    user: {
        mutations: function (state) {
            return Cookies.get('user') ? JSON.parse(Utils.decodeEntities(Cookies.get('user'))) : {}
        },
    },
    token: {},
    scrollTop: {
        getters: function (val) {
            return val > 0 ? parseInt(val) : 0
        }
    },
    scrollBottom: {},
    chatFriend: {},
    chatCurrentFriend: {},
    mdDraft: {
        title: '',
        content: ''
    },
    showFileList: {
        mutations: function (state) {
            return state.showFileList > 0 ? state.showFileList + 1 : 1
        },
    }
}
