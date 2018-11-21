// 统一存放调取接口的方法
import * as apis from './config'
import fetApi from './fetch.js';
export default {
	/**
	* 1 - postData
	* 2 - 接口路径
	* 3 - POST ,省略是 == 默认是get请求
	*/
	getUserList(postData){
		return fetApi(postData,apis.ApiUserList,"post")
	},

	//
	conctList(data){//关注列表
		return fetApi(data,apis.ApiList,"post")
	},

	conctShip(data){//关注船舶
		return fetApi(data,apis.Apiconcat,"post")
	},

	searchShip(data){//搜索船舶
		return fetApi(data,apis.ApisearchShip,"post")
	},

	getInfo(data){//根据mmsi查询船舶信息及mmsi
		return fetApi(data,apis.ApigetShipInfo,"post")
	},

	addUser(postData){
		return fetApi(postData,apis.ApiAddUser,"post")
	},

	login(postData){
		return fetApi(postData,apis.ApiLogin,"post")
	}
}
