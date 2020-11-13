import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:()=>import('./views/Index/index.vue')
    },
    {
      path: '/jiao/storage',
      component:()=>import('./views/Assets-management/jiao/storage/index.vue')
    },
    {
      path: '/jiao/contact',
      component:()=>import('./views/Assets-management/jiao/Contactandreturn/index.vue')
    },
    {
      path:'/src/views/Assets-management/C-viewunhandledrisks',
      name:'C-viewunhandledrisks',
      component:()=>import('./views/Assets-management/jiao/Contactandreturn/C-viewunhandledrisks.vue')
    },
    {
      path: '/jiao/reportthelossof',
      component:()=>import('./views/Assets-management/jiao/reportthelossof/index.vue')
    },
    {
      path: '/jiao/warranty',
      component:()=>import('./views/Assets-management/jiao/warranty/index.vue')
    },
    {
      path: '/jiao/scrap',
      component:()=>import('./views/Assets-management/jiao/scrap/index.vue')
    },
    {
      path: '/yi/storage',
      component:()=>import('./views/Assets-management/yi/storage/index.vue')
    },
    {
      path: '/yi/distribute',
      component:()=>import('./views/Assets-management/yi/distribute/index.vue')
    }
  ]
})
