import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalogo from '../views/Catalogo.vue'
import Quienes from '../views/Quienes.vue'
import Contacto from '../views/Contacto.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogo',
    name: 'Catalogo',
    component: Catalogo
  },
  {
    path: '/quienes',
    name: 'Quienes Somos',
    component: Quienes
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
