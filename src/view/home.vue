<template>
  <div class="home">
    <el-container style="height:100%;">
      <!-- <el-aside style="width:80px; height: 100%; background-color: rgba(31, 33, 42, 0.5); box-shadow: 1px 0px 4px 0px rgba(31, 33, 42, 0.5);">
        <Nav></Nav>
      </el-aside> -->
      <el-main class="height:100%;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  // background-color: rgb(31, 33, 43);
  background: linear-gradient(rgb(92, 116, 204) 0%, rgb(82, 105, 190) 140px, rgb(41, 63, 135) 640px, rgb(33, 52, 122) max(100vh, 700px), rgb(33, 52, 122) 100%);
  // border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>