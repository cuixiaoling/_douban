// 统一请求接口
import axios from 'axios'
const newUrl = "/api"
export default (apiPath,postData,method='get')=>{
	return axios({
      method: method,
      url: newUrl + apiPath,
      data: postData
    })
}