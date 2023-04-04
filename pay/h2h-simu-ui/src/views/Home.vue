<template>
    <div class="hello">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">测试中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">模拟交易</template>
                <el-submenu index="2-1">
                    <template slot="title">出票</template>
                    <el-menu-item index="2-1-1">出票登记</el-menu-item>
                    <el-menu-item index="2-1-2">提示承兑申请</el-menu-item>
                    <el-menu-item index="2-1-3">提示收票申请</el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                    <template slot="title">转让</template>
                    <el-menu-item index="2-2-1">背书转让</el-menu-item>
                    <el-menu-item index="2-2-2">贴现转让</el-menu-item>
                    <el-menu-item index="2-2-3">质押转让</el-menu-item>
                </el-submenu>
                <el-submenu index="2-3">
                    <template slot="title">解付</template>
                    <el-menu-item index="2-3-1">提示付款</el-menu-item>
                    <el-menu-item index="2-3-2">逾期提示付款</el-menu-item>
                </el-submenu>
                <el-submenu index="2-4">
                    <template slot="title">通用</template>
                    <el-menu-item index="2-4-1">通用签收</el-menu-item>
                    <el-menu-item index="2-4-2">通用撤销</el-menu-item>
                    <el-menu-item index="2-4-3">未用退回</el-menu-item>
                </el-submenu>
                <el-submenu index="2-5">
                    <template slot="title">查询</template>
                    <el-menu-item index="2-5-1">可用票据查询</el-menu-item>
                    <el-menu-item index="2-5-2">待签收交易查询</el-menu-item>
                    <el-menu-item index="2-5-3">票据状态查询</el-menu-item>
                    <el-menu-item index="2-5-4">票据操作结果查询</el-menu-item>
                    <el-menu-item index="2-5-5">票据操作结果查询(批量)</el-menu-item>
                    <el-menu-item index="2-5-6">行名行号增量查询</el-menu-item>
                </el-submenu>
                <el-submenu index="2-6">
                    <template slot="title">其他</template>
                    <el-menu-item index="2-6-1">服务检查</el-menu-item>
                    <el-menu-item index="2-6-2">自由格式</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">系统设置</el-menu-item>

        </el-menu>


    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
