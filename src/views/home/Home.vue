
<template>
    <el-container>
      <el-aside :width="isCollapse ? '50px' : '200px'">
        <navMenu :isCollapse="isCollapse"></navMenu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <navHeader @collapse ="collapse"></navHeader>
        </el-header>
        <el-main>
          <div class="page">
            <RouterView></RouterView>
          </div>

        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts" >
import { useHomeStore } from '@/stores/home/home';

import navMenu from '@/components/nav-menu/index'
import navHeader from '@/components/nav-header/index';
// import { useLoginStore } from '@/stores/login/login';
// import mapMenuToRoutes from "@/utils/map-menus"
// import {useRouter} from 'vue-router'


import { ref } from 'vue';
// const store = useHomeStore()
const isCollapse = ref(false)
// console.log(11);
// const router = useRouter()
// const loginStore = useLoginStore()
    // const routes = mapMenuToRoutes(loginStore.userMneus)
    // routes.forEach(item => {
    //   router.addRoute("main",item)
    // });
const collapse = (value:boolean) => {
isCollapse.value = value

}

</script>
<style lang="less">
.el-container{
  height: 100%;

  .el-aside{
    &::-webkit-scrollbar  {
    width: 0px;
    height: 4px;
}
    background-color: #021b38;
  }
  .el-main{
    background-color: #eee;
    .page{
      background-color: #fff;
    }
  }
}

</style>
