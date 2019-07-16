import { mapState, mapMutations } from "vuex";
export const state=() =>{
    return {
        userInfo:{
            token:'',
            user:{}
        }
    }
}
// mutations：同步设置修改state的数据
export const mutations= {
    // 设置用户的数据
    setUserInfo(state,data){
        state.userInfo=data
    },
    // 退出清除token
    clearUserInfo(state){
        state.userInfo={
            token:'',
            user:{}
        }
    }
}
export const actions= {
    login({ commit},data){
      return  this.$axios({
            method:'POST',
            url:'/accounts/login',
            data,
        })
        .then(res=>{
            commit("setUserInfo",res.data)
        })
    }
}