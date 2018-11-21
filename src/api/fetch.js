// 统一请求接口
import axios from 'axios'
const newUrl = "http://47.100.54.97:8080/ship_search/"
export default (postData,apiPath,method='get')=>{
	return axios({
      method: method,
      url: newUrl + apiPath,
      data: postData
    })
}