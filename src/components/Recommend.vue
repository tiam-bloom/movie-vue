<template>
  <div>
    <h1>推荐电影</h1>
    <div class="content">
      <el-card class="box-card" shadow="hover" v-for="film in films" @click="goDetail(film.id)">
        <img :src="film.cover" :alt="film.name">
        <div class="bottom">
          <span>{{ film.name }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import http from '@/utils/http';
const router = useRouter();
function goDetail(id) {
  //根据ID获取电影详情
  router.push({
    name: 'Detail',
    params: {
      id
    }
  })
}
const films = ref();
http.get('/getRecommends').then(res => {
  films.value = res.data.data;
})

</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap
}

.box-card {
  width: 200px;
  height: 200px;
  position: relative;
  margin: 10px;
}

.box-card:hover {
  transform: translateY(-1px);
}

img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

.bottom {
  position: absolute;
  bottom: 20px;
  /* 绝对定位水平居中 */
  left: 50%;
  transform: translateX(-50%);
}
</style>