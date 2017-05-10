import * as types from "../mutations-types";

const state = {
    list: []
}

const getters = {
    booklist: state => state.list
}

const actions = {
    addBook({commit, state}, name){
        setTimeout(() => {
            commit({type: types.ADDBOOKITEM, name: name});
        }, 300)
    }
}

const mutations = {
    [types.ADDBOOKITEM](state, payload){
        state.list.push(payload.name);
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}