<template>
  <div class="header">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffffff"
      text-color="#000"
      active-text-color="#ffd04b">
<!--      <el-menu-item index="1">处理中心</el-menu-item>-->
      <el-submenu index="2">
        <template slot="title">wo</template>
        <el-menu-item index="#" @click="logout">退出</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      window.localStorage.removeItem('login');
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    li
      float right!important
</style>
