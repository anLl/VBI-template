export default {
    namespaced:true,
    state:{
        username:''
    },
    mutations:{
        SET_USERNAME(state,username){
            state.username = username
        }
    },
    actions:{
        setUserName({commit},username){
            commit('SET_USERNAME',username)
        }
    }
}