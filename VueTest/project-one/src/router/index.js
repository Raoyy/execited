import Vue from 'vue'
import Router from 'vue-router'
import indexContent from '@/components/indexContent'
import aboutContent from '@/components/aboutContent'
import joinContent from '@/components/joinContent'
import downloadContent from '@/components/downloadContent'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/resource/site_1/dist/',//这个配置也很重要，否则会出现页面空白情况，页面根目录
  routes: [
    {
      path: '/',
      name: 'indexContent',
      component: indexContent
    },
    {
      path: '/about',
      name: 'aboutContent',
      component: aboutContent
    },
    {
      path: '/join',
      name: 'joinContent',
      component: joinContent
    },
    {
      path: '/download',
      name: 'downloadContent',
      component: downloadContent
    },
  ]
})
