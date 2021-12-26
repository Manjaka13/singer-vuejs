<template>
	<div class="container">
		<div class="logo-box">
			<figure class="logo-1">
				<img
					class="logo-image"
					src="../images/singer-france.png"
					alt="Logo Singer France"
				/>
			</figure>
			<figure class="logo-2">
				<img
					class="logo-image"
					src="../images/singer-france-text.png"
					alt="Logo Texte Singer France"
				/>
			</figure>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
};
</script>

<style lang="css">
/*
	Navbar
*/

.container {
	width: 100%;
	height: 80px;
	overflow: hidden;
	box-shadow: 0px 0px 20px rgba(100, 100, 100, 0.7);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 13;
	background: #e30044;
}

.logo-box {
	display: flex;
	justify-content: center;
	height: 100%;
	margin: 0;
}

.logo-1,
.logo-2 {
	display: inline-block;
	margin: 5px 0 0 0;
}

.logo-image {
	width: 80%;
}
</style>
