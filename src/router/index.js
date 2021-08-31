import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// 判断用户是否在登录状态
// import { checktoken } from '../apis/users'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: [{ path: '/Home/index', name: '/Home/index', component: () => import('../views/Index.vue') }, //主页
        { path: '/Home/Research', name: '/Home/Research', component: () => import('../views/Selection/Research.vue') }, //选品调研
        { path: '/Home/AuthorityList', name: '/Home/AuthorityList', component: () => import('../views/Sale/AuthorityList.vue') }, //权限列表
        { path: '/Home/AdminList', name: '/Home/AdminList', component: () => import('../views/Sale/AdminList.vue') }, //管理员列表
        { path: '/Home/RoleList', name: '/Home/RoleList', component: () => import('../views/Sale/RoleList.vue') },  //角色列表
        { path: '/Home/Mailhandling', name: '/Home/Mailhandling', component: () => import('../views/customerService/Mailhandling.vue') },  //任务池
        { path: '/Home/Storeprofit', name: '/Home/Storeprofit', component: () => import('../views/customerService/Storeprofit.vue') },  //客户列表
        { path: '/Home/Trade', name: '/Home/Trade', component: () => import('../views/customerService/Trade.vue') },  //订单列表
        { path: '/Home/ReceiptRecord', name: '/Home/ReceiptRecord', component: () => import('../views/customerService/ReceiptRecord.vue') },  //订单详情
        { path: '/Home/OperationDetails', name: '/Home/OperationDetails', component: () => import('../views/customerService/OperationDetails.vue') },  //金币流水
        { path: '/Home/UserInfo', name: '/Home/UserInfo', component: () => import('../views/info/UserInfo.vue') },  //管理员信息页
        { path: '/Home/SystemSettings', name: '/Home/SystemSettings', component: () => import('../views/system/SystemSettings.vue') }] //系统管理
    }

]

const router = new VueRouter({
    routes
})



// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
/* router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = localStorage.getItem('token');
 
    if (token === null || token === '') {
      next('/');
    } else {
      next();
    }
  }
}); */

export default router
