<template>
    <!-- 布局 -->
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <Main />
            </el-main>
            <el-footer>
                <Footer />
            </el-footer>
        </el-container>
    </div>
</template>
  

<script setup>
import Header from '@/layout/Header.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'
</script>
