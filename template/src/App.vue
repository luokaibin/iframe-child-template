<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#app::-webkit-scrollbar {
  display: none;
}
</style>
