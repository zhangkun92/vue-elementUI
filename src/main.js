import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false


//配置路由
const router = new  VueRouter({
  routes:[
    {path:'/home',component:Home},
    {path:'/helloworld',component:HelloWorld}
  ],
  mode:"history"
})

new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
