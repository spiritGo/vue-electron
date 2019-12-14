<template>
  <div class="sidebar"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebarWidth;
  height: 100vh;
  box-sizing: border-box;
  background-color: $color333;
}
</style>
