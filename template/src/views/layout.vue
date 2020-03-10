<template>
  <div class="fixedLayout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout'
};
</script>

<style lang="less" scoped>
.fixedLayout {
  box-sizing: border-box;
  padding-left: 230px;
  padding-top: 130px;
  width: 100vw;
  height: 100vh;
}
</style>
