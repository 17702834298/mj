import { axios } from '../utils/utils'
import Qs from 'qs'

// 启动任务
export let tasksStart = params => axios.post("tasks/start", Qs.stringify(params))

// 任务池
export let tasks = params => axios.post("tasks", Qs.stringify(params))