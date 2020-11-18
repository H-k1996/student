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
    ,
    {
      path: '/yi/collective',
      component:()=>import('./views/Assets-management/yi/distribute/collective.vue')
    }
    ,
    {
      path: '/yi/untreated',
      component:()=>import('./views/Assets-management/yi/distribute/untreated.vue')
    },
    {
      path: '/yi/cancel',
      component:()=>import('./views/Assets-management/yi/cancel/index.vue')
    },
    {
      path: '/di/register',
      component:()=>import('./views/Assets-management/di/register/index.vue')
    },
    {
      path: '/di/remould',
      component:()=>import('./views/Assets-management/di/remould/index.vue')
    },
    {
      path: '/house/register',
      component:()=>import('./views/Assets-management/house/register/index.vue')
    },
    {
      path: '/house/maintain',
      component:()=>import('./views/Assets-management/house/maintain/index.vue')
    }
    ,
    {
      path: '/house/remould',
      component:()=>import('./views/Assets-management/house/remould/index.vue')
    }
    ,
    {
      path: '/qi/storage',
      component:()=>import('./views/Assets-management/qi/storage/index.vue')
    },
    {
      path: '/qi/reportthelossof',
      component:()=>import('./views/Assets-management/qi/reportthelossof/index.vue')
    },
    {
      path: '/qi/scrap',
      component:()=>import('./views/Assets-management/qi/scrap/index.vue')
    },
    {
      path: '/qi/warranty',
      component:()=>import('./views/Assets-management/qi/warranty/index.vue')
    },
    {
      path: '/xiang/luru',
      component:()=>import('./views/Assets-management/xiang/luru/index.vue')
    },
    {
      path: '/shenqing/jiao',
      component:()=>import('./views/Apply-for-approval/shenqing/jiao.vue')
    },
    {
      path: '/shenqing/jiaoTwo',
      component:()=>import('./views/Apply-for-approval/shenqing/jiaoTwo.vue')
    },
    {
      path: '/shenqing/yi',
      component:()=>import('./views/Apply-for-approval/shenqing/yi.vue')
    },
    {
      path: '/shenqing/yiTwo',
      component:()=>import('./views/Apply-for-approval/shenqing/yiTwo.vue')
    },
    {
      path: '/shenqing/cai',
      component:()=>import('./views/Apply-for-approval/shenqing/cai.vue')
    },
    {
      path: '/shenqing/caiTow',
      component:()=>import('./views/Apply-for-approval/shenqing/caiTow.vue')
    }
    ,
    {
      path: '/shenpi/jiao',
      component:()=>import('./views/Apply-for-approval/shenpi/jiao.vue')
    }
    ,
    {
      path: '/shenpi/yi',
      component:()=>import('./views/Apply-for-approval/shenpi/yi.vue')
    },
    {
      path: '/shenpi/cai',
      component:()=>import('./views/Apply-for-approval/shenpi/cai.vue')
    }
  ]
})
