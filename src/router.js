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
    }
  ]
})
