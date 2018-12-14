// 统一存放调取接口的方法
import * as apis from './config'
import fetApi from './fetch.js';
export default {
	/**
	* 1 - postData
	* 2 - 接口路径
	* 3 - POST ,省略是 == 默认是get请求
	*/
	getList(data){
		return fetApi(apis.Apilist,data)
	},

}
