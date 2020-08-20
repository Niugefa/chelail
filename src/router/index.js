import Vue from 'vue'
import VueRouter from 'vue-router'

import index from "../views/index.vue";
import home from "../views/home.vue";
import xianlu from "../views/xianlu.vue";
import member from "../views/mamber.vue";
import search from "../views/search.vue";
import city from "../views/city.vue";
import about from "../views/about.vue";
import item from "../views/item.vue";
import zhandian from "../views/zhandian.vue";

Vue.use(VueRouter)


const routes = [
    {path:"/index",name:index,component : index,
        children:[
            {path:"/home", name:home,component:home,meta:{title:"首页"}},
            {path:"/xianlu",name:xianlu,component:xianlu,meta:{title:"线路"}},
            {path:"/member",name:member,component:member,meta:{title:"我的"}},
        ]
    },
    {path:"/city",name:city,component:city,meta:{title:'切换城市'}},
    {path:"/search",name:search,component:search,meta:{title:'搜索'}},
    {path:"/about",name:about,component:about,meta:{title:'关于'}},
    {path:"/item/:transitno",name:item,component:item,meta:{title:'item'}},
    {path:"/zhandian/:station",name:zhandian,component:zhandian,meta:{title:'zhandian'}},
    {path:"/",redirect:{name:index}},
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
