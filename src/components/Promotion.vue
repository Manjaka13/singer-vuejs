<template>
	<section id="promo" class="section promotion">
		<div class="container promotion__container">
			<div class="section-title">
				<div class="vertical-bar"></div>
				<h4 class="title">Nos promotion</h4>
			</div>

			<p class="section-paragraph">
				Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
				amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
				ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
				consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
				dolor sit amet consectetur.
			</p>

			<div class="promotion__box">
				<Swiper />
			</div>
		</div>
	</section>
</template>

<script>
import Swiper from "./Swiper.vue";

export default {
	name: "Promotion",
	components: {
		Swiper,
	},
};
</script>
<style lang="css">
.promotion__container {
	flex-direction: column;
}

.promotion__box {
	display: flex;
	width: 60%;
	height: 500px;
}
</style>
