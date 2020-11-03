import Vue from 'vue'
import Router from 'vue-router'
import {setTit} from '@/libs/util'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [	
	
		//首页
		{
      path: '/',
			name:'policeHome',
			meta: {
				title: '准旗公安'
			},
			component: () => import('./police/policeHome')
    },

    {
      path: '/policeHome',
			name:'policeHome',
			meta: {
				title: '准旗公安'
			},
			component: () => import('./police/policeHome')
    },
    {
      path: '/phone',
			name:'phone',
			meta: {
				title: '派出所电话'
			},
			component: () => import('./police/phone')
    },

    {
      path: '/outEvil',
			name:'outEvil',
			meta: {
				title: '扫黑除恶'
			},
			component: () => import('./police/outEvil')
    },
    {
      path: '/detail',
      name:'detail',
      meta: {
        title: '扫黑除恶'
      },
      component: () => import('./police/detail')
    },
    {
      path: '/infoHome',
      name:'infoHome',
      meta: {
        title: '信息公开'
      },
      component: () => import('./information/infoHome')
    },
    {
      path: '/workReport',
      name:'workReport',
      meta: {
        title: '工作报告'
      },
      component: () => import('./information/workReport')
    },
    {
      path: '/dataStatistics',
      name:'dataStatistics',
      meta: {
        title: '数据统计'
      },
      component: () => import('./information/dataStatistics')
    },
    {
      path: '/duty',
      name:'duty',
      meta: {
        title: '职能职责'
      },
      component: () => import('./information/duty')
    },
    {
      path: '/openInfo',
      name:'openInfo',
      meta: {
        title: '公开信息'
      },
      component: () => import('./information/openInfo')
    },
    {
      path: '/dutyDetail',
      name:'dutyDetail',
      meta: {
        title: '职能职责'
      },
      component: () => import('./information/detail')
    },
    {
      path: '/constructionList',
      name:'constructionList',
      meta: {
        title: ''
      },
      component: () => import('./construction/listData')
    },
    {
      path: '/construction',
      name:'construction',
      meta: {
        title: '智慧党建'
      },
      component: () => import('./construction/index')
    },
    {
      path: '/map',
      name:'map',
      meta: {
        title: '加载中...'
      },
      component: () => import('./map/index')
    },
    {
      path: '/down',
      name:'down',
      meta: {
        title: '下载'
      },
      component: () => import('./down/index')
    },
    // 游客登录
    {
      path: '/guest',
      name:'guest',
      meta: {
        title: '游客登录'
      },
      component: () => import('./guest/guest')
    },
  ]
})


router.afterEach(route => {
	//设置标题
	if (route.meta && route.meta.title) {
			setTit(route.meta.title)
	} else {
		 //如果页面中标题为动态标题，路由表内不填写，由页面内部设置
	}
})

export default router