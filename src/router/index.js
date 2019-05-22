import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录页面',
      component: require('../view/login/login.vue').default,
    },{
      // 主页
      path: '/home',
      name: '主页',
      component: require('../view/index/index.vue').default,
      meta: {
        auth: true
      },
      // 含有文件夹的文件children
      children:[{
        // 创建账户
          path: '/creatuser/creatus',
          name: '创建账户',
          component: require('../view/createuser/creatuser.vue').default,
          meta: {
            auth: true
          }
        },{
          // 我的订单
            path: '/user/usergoods',
            name: '我的订单',
            component: require('../view/user/usergoods.vue').default,
            meta: {
              auth: true
            }
          },{
            // 我要借款
              path: '/user/userloan',
              name: '我要借款',
              component: require('../view/user/userloan.vue').default,
              meta: {
                auth: true
              }
            },{
              // 账户设置
                path: '/user/userset',
                name: '账户设置',
                component: require('../view/user/userset.vue').default,
                meta: {
                  auth: true
                }
              },{
                // 录入企业信息
                  path: '/user/inputinfo/inputinfo1',
                  name: '账户设置',
                  component: require('../view/user/inputinfo/inputinfo1.vue').default,
                  meta: {
                    auth: true
                  }
                }],
    },
  ]
})
