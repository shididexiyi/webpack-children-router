import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)
import app from './app.vue'
//导入app组件

import router from './router.js'



var vm =new Vue({
    el:'#app',
    render: c => c(app),//render会把el指定的容器中，所有的内容都清空，所以不要 把路由的 router-view和router-link直接写到el所控制的元素中
    router//4将路由对象挂载到vm上
})