import * as types from './mutation-types'
// add 用户信息
export const AddInfo = function ({ commit }, data) {
  commit(types.ADD_UAERINFO, data)
}
// del 用户信息
export const DelInfo = function({ commit },data){
	commit (types.DEL_USERINFO,data);
	console.log(data,'del')
}
