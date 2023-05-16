<template>
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="/">
            <img src="@/assets/images/logo.svg" alt="" class="logo">
            <span class="title">电影大全</span>
        </el-menu-item>
        <!-- <div class="flex-grow" /> -->
        <div class="center">
            <el-menu-item index="/" >首页</el-menu-item>
            <el-menu-item index="/">欧美</el-menu-item>
            <el-menu-item index="/">日韩</el-menu-item>
            <el-menu-item index="/">国产</el-menu-item>
            <el-sub-menu index="/">
                <template #title>分类</template>
                <el-menu-item index="2-1">恐怖</el-menu-item>
                <el-menu-item index="2-2">悬疑</el-menu-item>
                <el-menu-item index="2-3">惊悚</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>爱情</template>
                    <el-menu-item index="2-4-1">甜美</el-menu-item>
                    <el-menu-item index="2-4-2">人生</el-menu-item>
                    <el-menu-item index="2-4-3">情感</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </div>
        <div class="search">
            <el-input class="w-100 m-2" placeholder="请输入您想观看的电影" :prefix-icon="Search" />
        </div>
    </el-menu>
</template>
  
<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
  
<style>
.flex-grow {
    flex-grow: 1;
}

.logo {
    width: 30px;
}

.title {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
}

.center {
    margin: 0 auto;
    display: flex;
}

.search {
    line-height: 50px;
    padding-right: 50px;
}
</style>
  