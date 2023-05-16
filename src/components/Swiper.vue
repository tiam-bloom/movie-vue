<template>
	<div>
		<!--  轮播  -->
		<Swiper 
		:slidesPerView="1" 
		:spaceBetween="60" 
		:loop="true" 
		:centeredSlides="true" 
		:pagination="{
			clickable: true
		}" 
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false
		}"
		:navigation="true" 
		:modules="modules" 
		@swiper="onSwiper" 
		@slideChange="onSlideChange" 
		class="mySwiper">
			<swiper-slide v-for="swiper in swipers">
				<img :src="swiper.cover" alt="" @click="goDetail(swiper.id)" />
			</swiper-slide>
		</Swiper>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import { useRouter } from 'vue-router'
import http from '@/utils/http';
import { ref } from 'vue';
const router = useRouter();
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//默认滑动效果（这里面注释掉的可以不要）
const onSwiper = swiper => {
	// console.log(swiper);
};
const onSlideChange = e => {
	// swiper切换的时候执行的方法
	// console.log('slide change', e.activeIndex);
};
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];

function goDetail(index) {
	router.push({
		name: "Detail",
		params: {
			id: index
		}
	})
}
const swipers = ref();
// 获取轮播图
http.get("/getSwipers").then(res => {
	console.log(res.data.data);
	swipers.value = res.data.data;
})

</script>

<style scoped>
.mySwiper {
	height: 600px;
}

img {
	width: 100%;
	/* object-fit: cover; */
}
</style>