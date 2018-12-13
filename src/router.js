import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ComputerGraphics from './views/ComputerGraphics.vue'
import Databases from './views/Databases.vue'
import FullStack from './views/FullStack.vue'
import InformationVisualization from './views/InformationVisualization.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/computer_graphics',
      name: 'computer_graphics',
      component: ComputerGraphics
    },
    {
      path: '/databases',
      name: 'databases',
      component: Databases
    },
    {
      path: '/full_stack',
      name: 'full_stack',
      component: FullStack
    },
    {
      path: '/information_visualization',
      name: 'information_visualization',
      component: InformationVisualization
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
