/**
* 左边菜单
*/
<template>
  <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path"
           unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff"
           active-text-color="#ffd04b">
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="">
    </div>
    <el-submenu v-for="menu in allmenu" :key="menu.menuid" :index="menu.menuname">
      <template slot="title">
        <i class="iconfont" :class="menu.icon"></i>
        <span>{{ menu.menuname }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="chmenu in menu.menus" :index="'/'+chmenu.url" :key="chmenu.menuid">
          <i class="iconfont" :class="chmenu.icon"></i>
          <span>{{ chmenu.menuname }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import {menu} from '../api/userMG'

export default {
  name: 'leftnav',
  data() {
    return {
      collapsed: false,
      allmenu: []
    }
  },
  // 创建完毕状态(里面是操作)
  created() {
    // 获取图形验证码
    let res = {
      success: true,
      data: [
        {
          menuid: 1,
          icon: 'li-icon-xiangmuguanli',
          menuname: '出票',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 1001,
              icon: 'icon-cat-skuQuery',
              menuname: '出票登记',
              hasThird: 'N',
              url: 'txn/1001',
              menus: null
            },
            {
              menuid: 1002,
              icon: 'icon-cat-skuQuery',
              menuname: '提示承兑',
              hasThird: 'N',
              url: 'txn/1002',
              menus: null
            },
            {
              menuid: 1003,
              icon: 'icon-cat-skuQuery',
              menuname: '提示收票',
              hasThird: 'N',
              url: 'txn/1003',
              menus: null
            }
          ]
        },
        {
          menuid: 2,
          icon: 'li-icon-dingdanguanli',
          menuname: '转让',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 2001,
              icon: 'icon-order-manage',
              menuname: '背书转让',
              hasThird: 'N',
              url: 'txn/2001',
              menus: null
            },
            {
              menuid: 2002,
              icon: 'icon-order-manage',
              menuname: '贴现转让',
              hasThird: 'N',
              url: 'txn/2002',
              menus: null
            },
            {
              menuid: 2003,
              icon: 'icon-order-manage',
              menuname: '质押转让',
              hasThird: 'N',
              url: 'txn/2003',
              menus: null
            }
          ]
        },
        {
          menuid: 3,
          icon: 'li-icon-xitongguanli',
          menuname: '解付',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 3001,
              icon: 'icon-cus-manage',
              menuname: '提示付款',
              hasThird: 'N',
              url: 'txn/3001',
              menus: null
            },
            {
              menuid: 3002,
              icon: 'icon-cms-manage',
              menuname: '逾期提示付款',
              hasThird: 'N',
              url: 'txn/3002',
              menus: null
            },
            // {
            //   menuid: 73,
            //   icon: 'icon-news-manage',
            //   menuname: '角色管理',
            //   hasThird: 'N',
            //   url: 'system/Role',
            //   menus: null
            // },
            // {
            //   menuid: 74,
            //   icon: 'icon-cs-manage',
            //   menuname: '公司管理',
            //   hasThird: 'N',
            //   url: 'system/Dept',
            //   menus: null
            // },
            // {
            //   menuid: 75,
            //   icon: 'icon-promotion-manage',
            //   menuname: '系统环境变量',
            //   hasThird: 'N',
            //   url: 'system/Variable',
            //   menus: null
            // },
            // {
            //   menuid: 76,
            //   icon: 'icon-cms-manage',
            //   menuname: '权限管理',
            //   hasThird: 'N',
            //   url: 'system/Permission',
            //   menus: null
            // }
          ]
        },
        {
          menuid: 4,
          icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
          menuname: '通用',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 4001,
              icon: 'icon-provider-manage',
              menuname: '通用签收',
              hasThird: 'N',
              url: 'txn/4001',
              menus: null
            },
            {
              menuid: 4002,
              icon: 'icon-provider-manage',
              menuname: '通用撤销',
              hasThird: 'N',
              url: 'txn/4002',
              menus: null
            },
            {
              menuid: 4003,
              icon: 'icon-provider-manage',
              menuname: '未用退回',
              hasThird: 'N',
              url: 'txn/4003',
              menus: null
            }
          ]
        },
        {
          menuid: 5,
          icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
          menuname: '查询',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 5001,
              icon: 'icon-provider-manage',
              menuname: '可操作票据查询',
              hasThird: 'N',
              url: 'txn/5001',
              menus: null
            },{
              menuid: 5002,
              icon: 'icon-provider-manage',
              menuname: '待签收交易查询',
              hasThird: 'N',
              url: 'txn/5002',
              menus: null
            },{
              menuid: 5003,
              icon: 'icon-provider-manage',
              menuname: '票据状态查询',
              hasThird: 'N',
              url: 'txn/5003',
              menus: null
            },{
              menuid: 5004,
              icon: 'icon-provider-manage',
              menuname: '票据操作结果查询',
              hasThird: 'N',
              url: 'txn/5004',
              menus: null
            },{
              menuid: 5005,
              icon: 'icon-provider-manage',
              menuname: '票据操作结果查询(批量)',
              hasThird: 'N',
              url: 'txn/5005',
              menus: null
            },{
              menuid: 5006,
              icon: 'icon-provider-manage',
              menuname: '行名行号增量查询',
              hasThird: 'N',
              url: 'txn/5006',
              menus: null
            }
          ]
        },
        {
          menuid: 6,
          icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
          menuname: '系统管理',
          hasThird: null,
          url: null,
          menus: [
            {
              menuid: 6001,
              icon: 'icon-provider-manage',
              menuname: '服务检查',
              hasThird: 'N',
              url: 'txn/6001',
              menus: null
            },
            {
              menuid: 6002,
              icon: 'icon-provider-manage',
              menuname: '自由格式',
              hasThird: 'N',
              url: 'txn/6002',
              menus: null
            },
            {
              menuid: 6003,
              icon: 'icon-provider-manage',
              menuname: '参数设置',
              hasThird: 'N',
              url: 'txn/6003',
              menus: null
            }
          ]
        }
      ],

      msg: 'success'
    }
    this.allmenu = res.data

    // menu(localStorage.getItem('logintoken'))
    //   .then(res => {
    //     console.log(JSON.stringify(res))
    //     if (res.success) {
    //       this.allmenu = res.data
    //     } else {
    //       this.$message.error(res.msg)
    //       return false
    //     }
    //   })
    //   .catch(err => {
    //     this.$message.error('菜单加载失败，请稍后再试！')
    //   })
    // 监听
    this.$root.Bus.$on('toggle', value => {
      this.collapsed = !value
    })
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  border: none;
  text-align: left;
}

.el-menu-item-group__title {
  padding: 0px;
}

.el-menu-bg {
  background-color: #1f2d3d !important;
}

.el-menu {
  border: none;
}

.logobox {
  height: 40px;
  line-height: 40px;
  color: #9d9d9d;
  font-size: 20px;
  text-align: center;
  padding: 20px 0px;
}

.logoimg {
  height: 40px;
}
</style>
