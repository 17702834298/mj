import { axios } from '../utils/utils'
import Qs from 'qs'

// 获取订单列表
export let orders = params => axios.post("orders", Qs.stringify(params))

// 获取订单详情
export let info = params => axios.post("orders/info", Qs.stringify(params))

// 支付方式
export let settingsPayment = params => axios.post("settings/payment", Qs.stringify(params))

