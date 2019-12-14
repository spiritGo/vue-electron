<template>
  <div class="home">
    <sidebar></sidebar>
    <navbar></navbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default {
  components: { Sidebar, Navbar }
};
</script>
<style lang="scss" scoped>
@import "../styles/variable.scss";

.home {
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.main {
  position: fixed;
  top: 0;
  width: calc(100vw - #{$sidebarWidth});
  height: calc(100vh - #{$navbarHeight});
  background-color: $color222;
  margin-left: $sidebarWidth;
  margin-top: $navbarHeight;
  box-sizing: border-box;
  padding: 6px;
  overflow: auto;
}
</style>
