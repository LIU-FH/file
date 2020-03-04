import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index';
import file from './modules/file';
import api from "./modules/api";

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        index, file,api
    }
})
export default store;