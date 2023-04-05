/**
* 基础菜单 商品管理
*/
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>出票登记</el-breadcrumb-item>
    </el-breadcrumb>


    <el-row style="margin-top:20px">
      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>出票人信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit()">使用模板</el-button>
          </div>
          <!-- 出票人表单 -->
          <el-form :model="remitterForm" label-width="100px">
            <el-form-item label="企业编号：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="用户编号：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="出票人账号：">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>承兑人信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit()">使用模板</el-button>
          </div>
          <!-- 承兑人表单 -->
          <el-form :model="acceptorForm" label-width="150px">
            <el-form-item label="承兑人名称：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="社会信用代码：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="承兑人账号：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="承兑人账户名称：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="承兑人行号：">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>


      <el-col :span="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>收款人信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit()">使用模板</el-button>
          </div>
          <!-- 收款人表单 -->
          <el-form :model="payeeForm" label-width="150px">

            <el-form-item label="收款人名称：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="社会信用代码：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="收款人账户：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="收款人账户名称：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="收款人行号：">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="24">
        <el-card>
          <div slot="header" class="clearfix">
            <span>出票登记信息</span>
          </div>
          <!-- 出票登记信息 -->
          <el-form :model="applyForm" label-width="120px" >
            <el-row>
              <el-col :span="4">
                <el-form-item label="出票类型：">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in issueTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="交易票据类型：" >
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in draftBusiTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="是否可拆分：" >
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in cdSplits"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="票据类型：" >
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in draftTypes"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="不得转让标记：">
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in transFlags"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="4">
                <el-form-item label="流水号：" >
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="票据金额：" >
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="出票日：" >
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="到期日：" >
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="交易类型：">
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="备注：">
                  <el-input size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>







            <el-form-item label="信用等级：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="评级机构：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="评级到期日：">
              <el-input size="small"></el-input>
            </el-form-item>
            <el-form-item label="合同编号：">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>


    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">重置</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="handleEdit()">发送</el-button>
      </el-form-item>
    </el-form>


    <!-- 编辑界面 -->
    <el-dialog :title="title" :visible.sync="editFormVisible" width="30%" @click="closeDialog">
      <el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
        <el-form-item label="部门名称" prop="deptName">
          <el-input size="small" v-model="editForm.deptName" auto-complete="off"
                    placeholder="请输入部门名称"></el-input>
        </el-form-item>
        <el-form-item label="部门代码" prop="deptNo">
          <el-input size="small" v-model="editForm.deptNo" auto-complete="off" placeholder="请输入部门代码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog">取消</el-button>
        <el-button size="small" type="primary" :loading="loading" class="title" @click="submitForm('editForm')">保存
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {deptList, deptSave, deptDelete} from '../../api/userMG'
import Pagination from '../../components/Pagination'

export default {
  data() {
    return {
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: '添加',
      editForm: {
        deptId: '',
        deptName: '',
        deptNo: '',
        token: localStorage.getItem('logintoken')
      },
      // rules表单验证
      rules: {
        deptName: [
          {required: true, message: '请输入部门名称', trigger: 'blur'}
        ],
        deptNo: [{required: true, message: '请输入部门代码', trigger: 'blur'}]
      },
      formInline: {
        page: 1,
        limit: 10,
        varLable: '',
        varName: '',
        token: localStorage.getItem('logintoken')
      },
      //出票人表单
      remitterForm:{},
      //承兑人表单
      acceptorForm:{},
      //收款人表单
      payeeForm:{},
      applyForm: {},
      // 删除部门
      seletedata: {
        ids: '',
        token: localStorage.getItem('logintoken')
      },
      userparm: [], //搜索权限
      listData: [], //用户数据
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
      //交易票据类型 draftBusiType
      draftBusiTypes:[{
        value: 'ECDS',
        label: '普票'
      },{
        value: 'CPES',
        label: '定额票据'
      }],
      //是否可拆分选择器
      cdSplits:[{
        value: '0',
        label: '不可拆分'
      },{
        value: '1',
        label: '可拆分'
      }],
      //出票类型选择器
      issueTypes:[{
        value: '00',
        label: '出票登记'
      },{
        value: '01',
        label: '一键两功能'
      },{
        value: '02',
        label: '一键三功能'
      }],
      //票据类型选择器
      draftTypes:[{
        value: 'AC01',
        label: '银票'
      },{
        value: 'AC02',
        label: '商票'
      }],
      //不得转让标记
      transFlags:[{
        value: 'EM00',
        label: '可再转让'
      },{
        value: 'EM01',
        label: '不得转让'
      }]
    }
  },
  // 注册组件
  components: {
    Pagination
  },
  /**
   * 数据发生改变
   */

  /**
   * 创建完毕
   */
  created() {
    this.getdata(this.formInline)
  },

  /**
   * 里面的方法只有被调用才会执行
   */
  methods: {
    // 获取公司列表
    getdata(parameter) {
      this.loading = true
      // 模拟数据开始
      let res = {
        code: 0,
        msg: null,
        count: 5,
        data: [
          {
            addUser: null,
            editUser: null,
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            deptName: 'XX分公司',
            deptNo: '1',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1521063247000,
            editTime: 1526652291000,
            deptId: 3,
            deptName: '上海测试',
            deptNo: '02',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526349555000,
            editTime: 1526349565000,
            deptId: 12,
            deptName: '1',
            deptNo: '11',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526373178000,
            editTime: 1526373178000,
            deptId: 13,
            deptName: '5',
            deptNo: '5',
            parentId: 1
          },
          {
            addUser: null,
            editUser: null,
            addTime: 1526453107000,
            editTime: 1526453107000,
            deptId: 17,
            deptName: 'v',
            deptNo: 'v',
            parentId: 1
          }
        ]
      }
      this.loading = false
      this.listData = res.data
      this.pageparm.currentPage = this.formInline.page
      this.pageparm.pageSize = this.formInline.limit
      this.pageparm.total = res.count
      // 模拟数据结束

      /***
       * 调用接口，注释上面模拟数据 取消下面注释
       */
      // deptList(parameter)
      //   .then(res => {
      //     this.loading = false
      //     if (res.success == false) {
      //       this.$message({
      //         type: 'info',
      //         message: res.msg
      //       })
      //     } else {
      //       this.listData = res.data
      //       // 分页赋值
      //       this.pageparm.currentPage = this.formInline.page
      //       this.pageparm.pageSize = this.formInline.limit
      //       this.pageparm.total = res.count
      //     }
      //   })
      //   .catch(err => {
      //     this.loading = false
      //     this.$message.error('菜单加载失败，请稍后再试！')
      //   })
    },
    // 分页插件事件
    callFather(parm) {
      this.formInline.page = parm.currentPage
      this.formInline.limit = parm.pageSize
      this.getdata(this.formInline)
    },
    // 搜索事件
    search() {
      this.getdata(this.formInline)
    },
    //显示编辑界面
    handleEdit: function (index, row) {
      this.editFormVisible = true
      if (row != undefined && row != 'undefined') {
        this.title = '修改'
        this.editForm.deptId = row.deptId
        this.editForm.deptName = row.deptName
        this.editForm.deptNo = row.deptNo
      } else {
        this.title = '添加'
        this.editForm.deptId = ''
        this.editForm.deptName = ''
        this.editForm.deptNo = ''
      }
    },
    // 编辑、增加页面保存方法
    submitForm(editData) {
      this.$refs[editData].validate(valid => {
        if (valid) {
          deptSave(this.editForm)
            .then(res => {
              this.editFormVisible = false
              this.loading = false
              if (res.success) {
                this.getdata(this.formInline)
                this.$message({
                  type: 'success',
                  message: '公司保存成功！'
                })
              } else {
                this.$message({
                  type: 'info',
                  message: res.msg
                })
              }
            })
            .catch(err => {
              this.editFormVisible = false
              this.loading = false
              this.$message.error('公司保存失败，请稍后再试！')
            })
        } else {
          return false
        }
      })
    },
    // 删除公司
    deleteUser(index, row) {
      this.$confirm('确定要删除吗?', '信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deptDelete(row.deptId)
            .then(res => {
              if (res.success) {
                this.$message({
                  type: 'success',
                  message: '公司已删除!'
                })
                this.getdata(this.formInline)
              } else {
                this.$message({
                  type: 'info',
                  message: res.msg
                })
              }
            })
            .catch(err => {
              this.loading = false
              this.$message.error('公司删除失败，请稍后再试！')
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 关闭编辑、增加弹出框
    closeDialog() {
      this.editFormVisible = false
    }
  }
}
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}

.userRole {
  width: 100%;
}


</style>


