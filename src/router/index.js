import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import zscrm from '@/components/zscrm'
import fqwx from '@/components/fqwx'
import xxgj from '@/components/xxgj'
import jylm from '@/components/jylm'
import case2 from '@/components/case'
import qdhz from '@/components/qdhz'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '番茄助教-首页'
      }
    },
    {
      path: '/zscrm',
      name: 'zscrm',
      component: zscrm,
      meta: {
        title: '番茄助教-番茄招生'
      }
    },
    {
      path: '/fqwx',
      name: 'fqwx',
      component: fqwx,
      meta: {
        title: '番茄助教-番茄微校'
      }
    },
    {
      path: '/xxgj',
      name: 'xxgj',
      component: xxgj,
      meta: {
        title: '番茄助教-番茄助教'
      }
    },
    {
      path: '/jylm',
      name: 'jylm',
      component: jylm,
      meta: {
        title: '番茄助教-教育联盟'
      }
    },
    {
      path: '/case',
      name: 'case',
      component: case2,
      meta: {
        title: '番茄助教-成功案例'
      }
    },
    {
      path: '/qdhz',
      name: 'qdhz',
      component: qdhz,
      meta: {
        title: '番茄助教-渠道合作'
      }
    },
  ]
})
