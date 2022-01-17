<template>
	<div class="swiper">
		<div class="swiper swiper__container">
			<button type="button" class="swiper-button button-left">
				<Icon :icon="['fas', 'chevron-left']" />
			</button>

			<div class="swiper-slide">
				<figure class="swiper-figure">
					<img
						class="swiper-image"
						src="https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg"
					/>
					<!-- <img
						src="https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg"
						alt="Photo des produits singer"
						class="swiper-image"
					/>

					<img
						src="https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg"
						alt="Photo des produits singer"
						class="swiper-image"
					/>

					<img
						src="https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg"
						alt="Photo des produits singer"
						class="swiper-image"
					/> -->
				</figure>
			</div>
			<button type="button" class="swiper-button button-right">
				<Icon :icon="['fas', 'chevron-right']" />
			</button>
		</div>
	</div>
	<!-- <swiper
		:slides-per-view="3"
		:space-between="50"
		@swiper="onSwiper"
		@slideChange="onSlideChange"
		virtual
	>
		<swiper-slide class="swiper-slide" v-for="image in images" :key="image">
			<figure class="swiper-figure">
				<img class="swiper-image" :src="image.src" alt="" />
			</figure>
		</swiper-slide>

		<button type="button" class="swiper-button button-left">
			<Icon :icon="['fas', 'chevron-left']" />
		</button>

		<button type="button" class="swiper-button button-right">
			<Icon :icon="['fas', 'chevron-right']" />
		</button>
	</swiper>
 -->
	<!-- <swiper
		ref="swiper"
		class="swiper__container"
		:modules="modules"
		:slides-per-view="1"
		:space-between="1"
		:options="swiperOptions"
		:autoplay="true"
		:pagination="{ clickable: true }"
		:scrollbar="{ draggable: true }"
	>
		<swiper-slide class="swiper-slide" v-for="image in images" :key="image">
			<figure class="swiper-figure">
				<img class="swiper-image" :src="image.src" alt="" />
			</figure>
		</swiper-slide>
		<swiper-slide class="swiper-slide"
			><figure class="swiper-figure">
				<img
					class="swiper-image"
					src="https://i.ytimg.com/vi/7m0IUJS-LOY/maxresdefault.jpg"
					alt=""
				/></figure
		></swiper-slide>

		<swiper-slide class="swiper-slide"
			><figure class="swiper-igure">
				<img
					class="swiper-image"
					src="https://i.pinimg.com/736x/f7/f9/72/f7f9728561e72cf987a1f07b75182fcf.jpg"
				/></figure
		></swiper-slide>

		<button type="button" class="swiper-button button-left">
			<Icon :icon="['fas', 'chevron-left']" />
		</button>

		<button type="button" class="swiper-button button-right">
			<Icon :icon="['fas', 'chevron-right']" />
		</button>
	</swiper> -->
</template>
<script>
/* import SwiperCore, { Virtual } from "swiper";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue"; */

import "swiper/swiper-bundle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faChevronRight);
/* SwiperCore.use([Virtual]);
 */
export default {
	components: {
		/* Swiper,
		SwiperSlide, */
		Icon,
	},

	data() {
		return {
			/* swiperOptions: {
				navigation: {
					nextEl: ".button-left",
					prevEl: ".button-right",
				},
			}, */

			images: [
				{ src: "https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg" },
				{ src: "https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg" },
				{ src: "https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg" },
			],
		};
	},
	/* 
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
	}, */
};
</script>

<style lang="css">
.swiper__container {
	border-radius: 10px;
	background: black;
	overflow: hidden;
	position: relative;
}

.swiper-slide {
	display: flex;
}

.swiper-figure > img {
	margin: auto;
	display: flex;
}

.swiper-image {
	position: absolute;
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
}
.swiper-button {
	display: block;
	position: absolute;
	z-index: 5;
	cursor: pointer;
	padding: 15px;
	border-radius: 50%;
	outline: none;
	border: none;
	background: #e30044;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.button-left {
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
}

.button-right {
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
}
</style>
