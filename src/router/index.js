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
      // 协议
      path: '/agreement',
      name: '协议',
      component: require('../view/xieyi/xieyi.vue').default,
    },{
      // 创建账户
        path: '/creatuser/creatus',
        name: '创建账户',
        component: require('../view/createuser/creatuser.vue').default,
        meta: {
          requirerequireAuth: true
        }
      },{
        // 创建账户
          path: '/failcreatuser/failcreatus',
          name: '创建账户失败',
          component: require('../view/createuser/failcreatuser.vue').default,
          meta: {
            requireAuth: true
          }
        },{
      // 主页
      path: '/home',
      name: '空白主页',
      component: require('../view/index/index.vue').default,
      meta: {
        requireAuth: true
      },
      // 含有文件夹的文件children
      children:[{
        // 主题home
          path: '/mshome',
          name: '主页',
          component: require('../view/index/home.vue').default,
          meta: {
            requireAuth: true
          }
        },{
          // 我的订单
            path: '/user/usergoods',
            name: '我的订单',
            component: require('../view/user/usergoods.vue').default,
            meta: {
              requireAuth: true
            }
          },{
            // 我要借款
              path: '/user/userloan',
              name: '我要借款',
              component: require('../view/user/userloan.vue').default,
              meta: {
                requireAuth: true
              }
            },{
              // 账户设置
                path: '/user/userset',
                name: '账户设置',
                component: require('../view/user/userset.vue').default,
                meta: {
                  requireAuth: true
                }
              },{
                // 录入企业信息
                  path: '/user/inputinfo/inputinfo1',
                  name: '信息录入',
                  component: require('../view/user/inputinfo/inputinfo1.vue').default,
                  meta: {
                    requireAuth: true
                  }
                },{
                  // detail
                    path: '/user/details/detail',
                    name: '信息',
                    component: require('../view/user/details/detail.vue').default,
                    meta: {
                      requireAuth: true
                    }
                  },{
                  // 订单信息
                    path: '/user/details/userbase/detailmore',
                    name: '订单信息',
                    component: require('../view/user/details/userbase/detailmore.vue').default,
                    meta: {
                      requireAuth: true
                    }
                  },{
                    // 基本信息
                      path: '/user/details/userbase/userbase',
                      name: '基本信息',
                      component: require('../view/user/details/userbase/userbase.vue').default,
                      meta: {
                        requireAuth: true
                      }
                    }],
    },
  ]
})
