import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Info from '@/components/Info'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    }
  ]
})
