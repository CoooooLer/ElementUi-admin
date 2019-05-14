<template>
  <div class="box">
    <el-radio-group v-model="isCollapse" style="z-index: 999;height: 61px;position: absolute;left: 1rem;top: 0.6rem">
      <el-button type="primary" circle size="mini" @click="change" :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" style="font-size: 2rem"></el-button>
    </el-radio-group>
    <el-menu :default-active="onRoutes" router  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handleOne" :collapse="isCollapse" style="max-width:200px;padding-top: 3rem">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="test">首页</span>
      </el-menu-item>
      <el-menu-item index="/business">
        <i class="el-icon-menu"></i>
        <span slot="title">业务管理</span>
      </el-menu-item>
      <el-submenu index="11">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">333</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/business">添加业务</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">报账管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      selectOne: '/',
    };
  },
  methods: {
    change() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleOne(key, keyPath) {
      // this.selectOne = key;
      // console.log(key, keyPath);
    },
    test() {
      console.log('test');
      this.$axios.post('api/api/admin/view')
        .then(res => {
          console.log(res);
        }).catch(err => {
        console.log(err);
      });
    },
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    },
  },
  mounted() {
    // console.log(1);
    // this.$axios.post('http://192.168.0.190/api/admin/view')
    //   .then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //   console.log(err);
    // });
  },
};
</script>

<style scoped lang="stylus">
  .box
    text-align left
    overflow hidden

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
