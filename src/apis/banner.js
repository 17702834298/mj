import { axios } from '../utils/utils'
import Qs from 'qs'
// 获取banner
export let banners = params => axios.post('banners', Qs.stringify(params))
