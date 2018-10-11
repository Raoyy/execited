import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import notFound from '@/components/notFound'

Vue.use(Router)

const myRouter = new Router({
	mode:'history',
  	routes: [
	    {
	      path: '/',
	      name: 'login',
	      component: login
	    },
	    {
	    	path: '*',            //若未找到页面时，跳往该页面
	    	name:'notFound',
	    	component: notFound
	    },
	    {
	      path: '/index',
	      name: 'index',
	      component: index
	    },
	    {
	      path: '/myCenter',
	      name: 'myCenter',
	      component: myCenter => require(['@/components/myCenter'],myCenter)
	    },
	    {
	      path: '/updatePwd',
	      name: 'updatePwd',
	      component: updatePwd => require(['@/components/updatePwd'],updatePwd)
	    },
	    {
	      path: '/register',
	      name: 'register',
	      component: register => require(['@/components/register'],register)
	    },
	    {
	      path: '/findpsd',
	      name: 'findpsd',
	      component: findpsd => require(['@/components/findpsd'],findpsd)
	    },
	    {
	      path: '/volIndex',
	      name: 'volIndex',
	      redirect: '/volIndex/actshow',
	      component: volIndex => require(['@/components/volIndex'],volIndex),
	      meta:{index:0},
	      children:[
		        {path: '/volIndex/actshow', component: actshow => require(['@/components/volunteer/actshow'],actshow),meta:{index:10}},
//		        {     //params传参，动态匹配模式
//		        	path: '/volIndex/actmess/:id', 
//		        	component: actmess => require(['@/components/volunteer/actmess'],actmess),
//		        	props: true
//		        },
				{     //params传参，动态匹配模式（多个参数）
		        	path: '/volIndex/actmess/:id/:type', 
		        	component: actmess => require(['@/components/volunteer/actmess'],actmess),
		        	props: true    //即使不设置此参数，也可以this.$route.params接收到参数
		        },
//				{
//		        	path: '/volIndex/actmess', 
//		        	name: 'actmess',
//		        	component: actmess => require(['@/components/volunteer/actmess'],actmess)
//		        },
//		        {
//		        	path: '/volIndex/find', 
//		        	component: find => require(['@/components/volunteer/find'],find),
//		        	meta:{index:11}
//		        },
				{
		        	path: '/volIndex/find', 
		        	component: find => import('@/components/volunteer/find'),     //路由懒加载
		        	meta:{index:11}
		        },
		        {path: '/volIndex/myAct', component: myAct => require(['@/components/volunteer/myAct'],myAct),meta:{index:12}}
	    	]
	    },
	    {
	      path: '/youthEdu',
	      name: 'youthEdu',
	      component: youthEdu => require(['@/components/youthEdu'],youthEdu)
	    }
  	],
  	scrollBehavior (to, from, savedPosition) {            //仅支持原生按钮，页面高度由数据加载生成时无效
  		return new Promise((resolve, reject) => {
		    setTimeout(() => {
		    	if (savedPosition) {
		    		resolve(savedPosition);
				} else {
					resolve({ x: 0, y: 0 })
				}
		    }, 500)
		});
	}
})

myRouter.beforeEach((to, from, next) => {
//	console.log(to);
//	console.log(from);
  	if (to.matched.length === 0) {                                        //如果未匹配到路由
    	from.name ? next({ name:from.name }) : next('/');   //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  	} else {
    	next();                                                                            //如果匹配到正确跳转
  	}
})

myRouter.afterEach((to, from) => {         //全局后置钩子
//  	console.log(to);
//	console.log(from);
})

export default myRouter








