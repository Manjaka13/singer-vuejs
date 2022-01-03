<template>
	<nav class="navbar">
		<figure class="navbar__logo">
			<img
				class="navbar__image"
				src="../images/singer-france.png"
				alt="Logo Singer France"
			/>
		</figure>
		<figure class="navbar__logo">
			<img
				class="navbar__image"
				src="../images/singer-france-text.png"
				alt="Logo Texte Singer France"
			/>
		</figure>
	</nav>
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

.navbar {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 76px;
	overflow: hidden;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 13;
	background: #e30044;
}

.navbar__logo {
	margin: 0;
}

.navbar__image {
	width: 70%;
}
</style>
