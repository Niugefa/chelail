import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city:"成都",
        cityid:"321",
        address:"太平园",
    },
    mutations:{
        nameCity(state,a){
            return state.city = a;
        },
        nameCityid(state,a){
            return state.cityid = a;
        },
        nameAddress(state,a){
            return state.address = a;
        },
        
    },
    actions: {
    },
    modules: {
    }
})
