<template>
	<swiper
		:modules="modules"
		:slides-per-view="2"
		:space-between="30"
		:options="swiperOptions"
		navigation
		:autoplay="true"
		:pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }"
	>
		<swiper-slide>
			<figure class="swiper-slide__figure">
				<img
					class="swiper__image"
					src="https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg"
					alt=""
				/>
			</figure>
		</swiper-slide>
		<swiper-slide
			><figure class="swiper-slide__figure">
				<img
					class="swiper__image"
					src="https://i.ytimg.com/vi/7m0IUJS-LOY/maxresdefault.jpg"
					alt=""
				/></figure
		></swiper-slide>
		<swiper-slide
			><figure class="swiper-slide__figure">
				<img
					class="swiper__image"
					src="http://pm1.narvii.com/6993/c5313db21e65af45280b7dfb258b8631749d7cb3r1-707-1000v2_00.jpg"
				/></figure
		></swiper-slide>
		<swiper-slide
			><figure class="swiper-slide__figure">
				<img
					class="swiper__image"
					src="https://i.pinimg.com/736x/f7/f9/72/f7f9728561e72cf987a1f07b75182fcf.jpg"
				/></figure
		></swiper-slide>
	</swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// Import Swiper styles
export default {
	components: {
		Swiper,
		SwiperSlide,
	},

	data() {
		return {
			swiperOptions: {
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		};
	},

	methods: {
		prev() {
			this.$refs.swiper.$swiper.slidePrev();
		},
		next() {
			this.$refs.swiper.$swiper.slideNext();
		},
	},
	setup() {
		return {
			modules: [Navigation, Pagination, Scrollbar, A11y],
		};
	},
};
</script>

<style lang="css">
.swiper-slide__figure {
	display: flex;
	width: 100%;
	height: 100%;
}
.swiper__image {
	width: 100%;
	height: 100%;
}
</style>
