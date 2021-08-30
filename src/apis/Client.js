import { axios } from '../utils/utils'
import Qs from 'qs'

// 修改客户信息
export let customersUpdate = params => axios.post("customers/update",Qs.stringify(params))

// 获取客户列表
export let customers = params => axios.post("customers", Qs.stringify(params))
