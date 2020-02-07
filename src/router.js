import Vue from 'vue'
import Router from 'vue-router'
import PersonalInfo from '@/views/PersonalInfo.vue'
import TodoLists from '@/views/TodoLists.vue'
import Home from '@/views/Home.vue'
import sampleaxios from '@/views/sampleaxios.vue'
import wala from '@/views/wala.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        name: '/',
        component: Home
      },
        {
            path: '/add-info',
            name: '/add-info',
            component: PersonalInfo
          },
        {
            path: '/add-todolist',
            name: '/add-todolist',
            component: TodoLists
          },
          {
            path: '/sample',
            name: '/sample',
            component: sampleaxios
          },
          {
            path: '/weather',
            name: '/weather',
            component: wala
          }
        ]
    })