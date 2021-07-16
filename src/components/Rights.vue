<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 用户列表区域 -->
      <el-table :data="roleList" border stripe>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'" type="success">一级</el-tag>
            <el-tag v-else-if="scope.row.level === '1'" type="warning"
              >二级</el-tag
            >
            <el-tag v-else type="danger">三级</el-tag>
          </template></el-table-column
        >
      </el-table>
    </el-card>s
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        type: 'tree'
      },
      roleList: [],
      // 控制添加用户对话框的显示与隐藏
      addRigthsFlag: false
    }
  },
  created () {
    this.getRoleList()
  },
  methods: {
    async getRoleList () {
      const { data: res } = await this.$http.get('rights/list')
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败！')
      }
      this.roleList = res.data
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped></style>
