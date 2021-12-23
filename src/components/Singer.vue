<template>
	<div class="singer">
		<h1 class="singer__title">Hello from {{value}} !</h1>
	</div>
</template>

<script>
/*
	Entry point for vue components
*/

export default {
	name: "Singer",
	data() {
		return {
			value: "Vue"
		};
	},
};
</script>

<style lang="css">
	.singer__title {
		padding: 20px;
		color: rgb(80, 80, 80);
	}
</style>