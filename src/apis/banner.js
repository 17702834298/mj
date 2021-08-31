import { axios } from '../utils/utils'
import Qs from 'qs'
// 获取banner
export let banners = params => axios.post('banners', Qs.stringify(params))

// 创建banner
export let bannersCreate = params => axios.post('banners/create', Qs.stringify(params))

// 更新banner
export let bannersUpdate = params => axios.post('banners/update', Qs.stringify(params))
