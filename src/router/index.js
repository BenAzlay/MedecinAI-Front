import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListPatients from '@/components/ListPatients'
import PostDiagnosis from '@/components/PostDiagnosis'
import SignUp from '@/components/SignUp'
import LoginComponent from "@/views/login.vue"
import Search from "@/components/Search"
import Results from "@/components/Results"

Vue.use(Router)

export default new Router({
  routes: [
    {      
      path: '/',
      name: 'home',           
      component: Home    
    },    
    {      
      path: '/list-patients',
      name: "list-patients",            
      component: ListPatients
    },
    {      
      path: '/post-diagnosis',
      name: "post-diagnosis",            
      component: PostDiagnosis
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
    {
      path: "/results",
      name: "results",
      component: Results
    },
  ]
})