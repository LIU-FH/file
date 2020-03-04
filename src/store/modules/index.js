import config from '../config';

const state = {};
const getters = {};
const mutations = {};
const actions = {};

Object.keys(config).forEach(function (key) {
    state[key] = {}
    getters[key + 'Data'] = function (state) {
        if (config[key].getters) {
            return config[key].getters(state[key])
        } else {
            return state[key]
        }
    }
    mutations[key] = function (state, params) {
        if (config[key].mutations) {
            state[key] = config[key].mutations(state, params)
        } else {
            state[key] = params
        }
    }
    actions[key] = function ({commit}, params) {
        commit(key, params)
    }
})
export default {
    state, getters, mutations, actions
}
