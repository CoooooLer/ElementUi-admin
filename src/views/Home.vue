<template>
  <div class="home">
<!--    <el-container style="height: 500px; border: 1px solid #eee">-->
<!--      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
    <Header></Header>
    <div class="content-box">
      <left-menu></left-menu>
      132
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import LeftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Header,
    LeftMenu,
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};

</script>


<style lang="stylus" scoped>
  body
    background #eef0f5
  .content-box
    background aquamarine
    width 100%
    display flex
</style>
