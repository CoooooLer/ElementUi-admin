<template>
  <div class="box">
    <left-menu></left-menu>
    <div class="content-box">
      <Header></Header>
      business
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import LeftMenu from '@/components/LeftMenu.vue';

export default {
  name: 'business',
  components: {
    Header,
    LeftMenu,
  },
};
</script>

<style scoped>

</style>
