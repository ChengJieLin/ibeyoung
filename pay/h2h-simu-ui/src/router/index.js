// 导入组件
import Vue from 'vue';
import Router from 'vue-router';
// 登录
import login from '@/views/login';
// 首页
import index from '@/views/index';
/**
 * 基础菜单
 */
// 商品管理
import Goods from '@/views/goods/Goods';
// 机器信息管理
import Machine from '@/views/machine/Machine';
// 货道信息管理
import MachineAisle from '@/views/machine/MachineAisle';
/**
 * 订单管理
 */
// 交易订单
import Order from '@/views/pay/Order';
/**
 * 系统管理
 */
// 用户管理
import user from '@/views/system/user';
// 菜单管理
import Module from '@/views/system/Module';
// 角色管理
import Role from '@/views/system/Role';
// 公司管理
import Dept from '@/views/system/Dept';
// 系统环境变量
import Variable from '@/views/system/Variable';
// 权限管理
import Permission from '@/views/system/Permission';
/**
 * 支付管理
 */
// 支付配置信息
import MachineConfig from '@/views/machine/MachineConfig';
// 支付配置
import Config from '@/views/pay/Config';
/**
 * 数据监控
 */
// 监控查询
import druidLogin from '@/views/druid/login';

// 图表界面
import statistics from '@/views/charts/statistics';

// 启用路由
Vue.use(Router);

// 导出路由
export default new Router({
    routes: [{
        path: '/',
        name: '',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/login',
        name: '登录',
        component: login,
        hidden: true,
        meta: {
            requireAuth: false
        }
    }, {
        path: '/index',
        name: '首页',
        component: index,
        iconCls: 'el-icon-tickets',
        children: [{
          path: '/txn/1001',
          name: '商品管理',
          component: () => import('@/views/txn/1001.vue'),
          meta: {
            requireAuth: true
          }
        },{
          path: '/txn/1002',
          name: '提示承兑',
          component: () => import('@/views/txn/1002.vue'),
          meta: {
            requireAuth: true
          }
        },


        {
          path: '/txn/1003',
          name: '提示收票',
          component: () => import('@/views/txn/1003.vue'),
          meta: {
            requireAuth: true
          }
        },

          {
            path: '/txn/2001',
            name: '背书转让',
            component: () => import('@/views/txn/2001.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/2002',
            name: '贴现转让',
            component: () => import('@/views/txn/2002.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/2003',
            name: '质押转让',
            component: () => import('@/views/txn/2003.vue'),
            meta: {
              requireAuth: true
            }
          },


          {
            path: '/txn/3001',
            name: '提示付款',
            component: () => import('@/views/txn/3001.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/3002',
            name: '逾期提示付款',
            component: () => import('@/views/txn/3002.vue'),
            meta: {
              requireAuth: true
            }
          },


          {
            path: '/txn/4001',
            name: '通用签收',
            component: () => import('@/views/txn/4001.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/4002',
            name: '通用撤回',
            component: () => import('@/views/txn/4002.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/4003',
            name: '未用退回',
            component: () => import('@/views/txn/4003.vue'),
            meta: {
              requireAuth: true
            }
          },


          {
            path: '/txn/5001',
            name: '可操作票据查询',
            component: () => import('@/views/txn/5001.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/5002',
            name: '待签收交易状态查询',
            component: () => import('@/views/txn/5002.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/5003',
            name: '票据状态查询',
            component: () => import('@/views/txn/5003.vue'),
            meta: {
              requireAuth: true
            }
          },{
            path: '/txn/5004',
            name: '票据操作结果查询',
            component: () => import('@/views/txn/5004.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/5005',
            name: '票据操作结果查询(批量)',
            component: () => import('@/views/txn/5005.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/5006',
            name: '行名行号增量查询',
            component: () => import('@/views/txn/5006.vue'),
            meta: {
              requireAuth: true
            }
          },


          {
            path: '/txn/6001',
            name: '服务检查',
            component: () => import('@/views/txn/6001.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/6002',
            name: '自由格式',
            component: () => import('@/views/txn/6002.vue'),
            meta: {
              requireAuth: true
            }
          },
          {
            path: '/txn/6003',
            name: '参数设置',
            component: () => import('@/views/txn/6003.vue'),
            meta: {
              requireAuth: true
            }
          },


          {
            path: '/goods/Goods',
            name: '商品管理',
            component: Goods,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/Machine',
            name: '机器信息管理',
            component: Machine,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/MachineAisle',
            name: '货道信息管理',
            component: MachineAisle,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/pay/Order',
            name: '交易订单',
            component: Order,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/user',
            name: '用户管理',
            component: user,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Module',
            name: '菜单管理',
            component: Module,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Role',
            name: '角色管理',
            component: Role,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Dept',
            name: '公司管理',
            component: Dept,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Variable',
            name: '系统环境变量',
            component: Variable,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/system/Permission',
            name: '权限管理',
            component: Permission,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/machine/MachineConfig',
            name: '支付配置信息',
            component: MachineConfig,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/pay/Config',
            name: '支付配置',
            component: Config,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/druid/login',
            name: '监控查询',
            component: druidLogin,
            meta: {
                requireAuth: true
            }
        }, {
            path: '/charts/statistics',
            name: '数据可视化',
            component: statistics,
            meta: {
                requireAuth: true
            }
        }]
    }]
})
