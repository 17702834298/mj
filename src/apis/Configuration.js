import { axios } from '../utils/utils'
import Qs from 'qs'

// 获取支付配置
export let settingsPayment = params => axios.post("settings/payment", Qs.stringify(params))

// 更新支付配置
export let settingsSet = params => axios.post("settings/payment/set", Qs.stringify(params))

// 获取金币配置
export let settingsCoin = params => axios.post("settings/coin", Qs.stringify(params))

// 更新金币配置
export let CoinSet = params => axios.post("settings/coin/set", Qs.stringify(params))

// 删除某个配置
export let settingDelete = params => axios.post("setting/delete", Qs.stringify(params))

// 获取全部配置
export let settings = params => axios.post("settings", Qs.stringify(params))