import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListUsers from '@/components/ListUsers'
import ListMedia from '@/components/ListMedia'
import PostMedia from '@/components/PostMedia'
import SignUp from '@/components/SignUp'
import LoginComponent from "@/views/login.vue"
import Search from "@/components/Search"

Vue.use(Router)

export default new Router({
  routes: [
    {      
      path: '/',
      name: 'home',           
      component: Home    
    },    
    {      
      path: '/list-users',
      name: "list-users",            
      component: ListUsers
    },
    {      
      path: '/list-media',
      name: "list-media",            
      component: ListMedia
    },
    {      
      path: '/post-media',
      name: "post-media",            
      component: PostMedia
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
  ]
})