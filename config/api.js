const http = uni.$u.http
/**
 * 全局公共参数
 */
let publicData = {
	token: '123'
}
/**
 * post请求演示 
 * postRequest1：不带公共参数 postRequest2：带公共参数
 */ 
export const postRequest1 = (params, config = {}) => http.post('url链接', params, config)
export const postRequest2 = (params, config = {}) => http.post('url链接', {...publicData,...params}, config)
/**
 * get请求演示，注意：get请求的配置等，都在第二个参数中，详见前面解释
 * getRequest1：不带公共参数 getRequest2：带公共参数
 */ 
export const getRequest1 = (data) => http.get('url链接', data)
export const getRequest2 = (data) => http.get('url链接', {...publicData,...data})

// 测试接口1
export const similarBook = (params, config = {}) => http.post('app/v4.Book/similarBook', {...publicData,...params}, config)

// 测试接口2
export const indexMoreBook = (params, config = {}) => http.post('app/v4.index/indexMoreBook', params, config)