<template>
	<vueper-slides
		slide-image-inside
		class="no-shadow"
		:arrows="true"
		:visible-slides="1"
		:dragging-distance="1"
		:slideMultiple="true"
		:arrows-outside="false"
		:infinite="true"
	>
		<vueper-slide
			v-for="(item, key) in slides"
			:key="key"
			:image="item.image"
			class="image"
		>
		</vueper-slide>
	</vueper-slides>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
	name: "Hooper",
	components: { VueperSlides, VueperSlide },
	data() {
		return {
			slides: [
				{
					title: "Slide #1",
					image: "https://i.ytimg.com/vi/MMtsZGq-fpg/maxresdefault.jpg",
				},
				{
					title: "Slide #2",
					image: "https://i.pinimg.com/736x/f7/f9/72/f7f9728561e72cf987a1f07b75182fcf.jpg",
				},
				{
					title: "Slide #3",
					image: "http://pm1.narvii.com/6993/c5313db21e65af45280b7dfb258b8631749d7cb3r1-707-1000v2_00.jpg",
				},
				{
					title: "Slide #4",
					image: "https://i.ytimg.com/vi/7m0IUJS-LOY/maxresdefault.jpg",
				},
			],
		};
	},
};
</script>

<style lang="css"></style>
