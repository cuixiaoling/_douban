import * as types from './mutation-types'
import VueCookie from 'vue-cookie'
let that = this;
const matutaions = {
  [types.ADD_UAERINFO](state, userInfo){
    state.userInfo = userInfo;
    console.log(userInfo,'mutation + add');
    for(let key in userInfo){
	    VueCookie.set(key, userInfo[key]);
    }
  },
  [types.DEL_USERINFO](state,userInfo){
    let cookieObj = ['phone','uid','userName']
    for(let val of cookieObj){
	    VueCookie.delete(val);
    }
    state.userInfo={};
  },

}

export default matutaions
