import { axios } from '../utils/utils'
import Qs from 'qs'
// 管理员登录
export let login = params => axios.post('login', Qs.stringify(params))

// 角色列表
export let roles = params => axios.post('roles', Qs.stringify(params))

// 修改角色信息
export let rolesupdate = params => axios.post('roles/update', Qs.stringify(params))

// 管理员列表
export let users = params => axios.post('users', Qs.stringify(params))

// 权限列表
export let permissions = params => axios.post('permissions', Qs.stringify(params))

// 删除单个权限
export let perdelete = params => axios.post('permissions/delete', Qs.stringify(params))

// 修改管理员权限
export let usersUpdate = params => axios.post('users/update', Qs.stringify(params))



