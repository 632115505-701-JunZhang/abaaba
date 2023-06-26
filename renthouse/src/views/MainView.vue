<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2" id="menulist">
        <a href="#" class="list-group-item active" onclick="loadPage('page1')">
          <!-- 小图标样式设置 -->
          产品信息</a
        >
        <a href="#" class="list-group-item" onclick="loadPage('page2')">
          大屏信息
        </a>
        <a href="#" class="list-group-item" onclick="loadPage('page3')">
          用户管理</a
        >
        <a href="#" class="list-group-item"> 菜单4</a>
        <a href="#" class="list-group-item"> 菜单5</a>
        <a href="#" class="list-group-item"> 菜单6</a>
        <a href="#" class="list-group-item"> 菜单7</a>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  //  name: "HomeView",
  //  components: {
  //    HelloWorld,
  //  },
};
</script>
