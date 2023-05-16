<template>
    <div class="container">
        <h2>{{ detail.name }} {{ $route.params.id }}</h2>
        <div class="detail">
            <img :src="detail.cover" alt="" width="150">
            <div class="xiangqing">
                <ul>
                    <li v-for="(value, key) in detail.xiangqing">{{ key }}:  {{ value }}</li>
                </ul>
            </div>
        </div>
        <h3>{{ detail.name }}的剧情简介 · · · · · ·</h3>
        <p>{{ detail.jianjie }} </p>
        <h3>{{ detail.name }}的演职员 · · · · · ·</h3>
        <div class="actors">
            <div class="actor" v-for="actor in detail.actors">
                <img :src="actor.cover" :alt="actor.name" width="100" />
                <div>{{ actor.name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import http from '@/utils/http';
const route = useRoute();
console.log('Detail', route.params.id);
const detail = ref({
    id: '',
    cover: '',
    name: '',
    jianjie: '',
    actors: [],
    xiangqing: []
});
// http.get(`/getDetail/${route.params.id}`).then(res => {
http.get(`/getDetail`).then(res => {
    console.log(res.data.data);
    detail.value = res.data.data;
})
</script>

<style scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    /* background-color: #ccc; */
}

.detail {
    display: flex;
}

.xiangqing li {
    list-style: none;
}

.actors {
    display: flex;
}

.actor {
    text-align: center;
    width: 120px;
}
</style>