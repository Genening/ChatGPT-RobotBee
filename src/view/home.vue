<template>
  <div class="home">
    <el-container style="height:100%;">
      <el-aside style="width:100px; height: 100%; background-color: rgba(31, 33, 42); box-shadow: 1px 0px 4px 0px black;">
        <Nav></Nav>
      </el-aside>
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
  background-color: rgb(31, 33, 43);
  // border-radius: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>