<template>
  <div class="navbar">
    <div class="icon-wrap">
      <img class="icon" src="../assets/favicon.png" alt="icon" />
    </div>
    <el-row type="flex">
      <div class="menu">
        <span
          v-for="(item, index) in menu"
          :key="index"
          class="menu-item"
          @click="tabClick"
          :data-index="index"
          :class="tabIndex == index ? 'on' : ''"
        >
          {{ item }}
        </span>
      </div>
      <div class="title-wrap">
        <span class="title">标题</span>
      </div>
      <div class="op">
        <i class="el-icon-minus" @click="onOperation" data-op="window-min"></i>
        <i
          class="el-icon-full-screen"
          @click="onOperation"
          data-op="window-max"
        ></i>
        <i
          class="el-icon-close"
          @click="onOperation"
          data-op="window-close"
        ></i>
      </div>
    </el-row>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      menu: [
        "File",
        "Edit",
        "Selection",
        "View",
        "Go",
        "Debug",
        "Terminal",
        "Help"
      ],
      tabIndex: 0
    };
  },
  methods: {
    tabClick(e) {
      this.tabIndex = e.target.dataset.index;
    },
    onOperation(e) {
      let op = e.target.dataset.op;
      if (window.electron) {
        window.electron.ipcRenderer.send(op);
      } else if (op == "window-max") {
        if (!screenfull.isEnabled) {
          this.$message({
            message: "该设备暂不支持全屏",
            type: "warning"
          });
          return false;
        }
        screenfull.toggle();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variable.scss";

.navbar {
  position: fixed;
  top: 0;
  left: -#{$sidebarWidth};
  display: flex;
  align-items: stretch;
  width: 100vw;
  height: 40px;
  box-sizing: border-box;
  background-color: $color333;
  margin-left: 50px;
  box-shadow: 0 1px 2px #000000;
  z-index: 1000;
  font-size: 14px;
  color: #cccccc;
  user-select: none;
}

.icon-wrap {
  width: $navbarHeight;
  height: $navbarHeight;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  box-sizing: border-box;
  -webkit-app-region: drag;

  .icon {
    width: 100%;
    height: 100%;
  }
}

.el-row {
  flex: 1;
}

.menu {
  height: 100%;
  display: flex;
  align-items: stretch;

  .menu-item {
    line-height: $navbarHeight;
    cursor: pointer;
    padding: 0 10px;
    transition: all 0.6s;

    &:hover {
      background-color: rgba($color: #ffffff, $alpha: 0.1);
    }

    &.on {
      @extend .menu-item:hover;
    }
  }
}

.op {
  display: flex;
  width: 150px;
  flex-shrink: 0;

  i {
    line-height: $navbarHeight;
    flex: 1;
    text-align: center;
    transition: all 0.6s;

    &:hover {
      background-color: rgba($color: #ffffff, $alpha: 0.1);
    }

    &:last-child:hover {
      background-color: #ff0000;
      color: #ffffff;
    }
  }
}

.title-wrap {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
  padding: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-app-region: drag;

  .title {
    line-height: $navbarHeight;
  }
}
</style>
