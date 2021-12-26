<template>
	<div>
		<Navbar />
		<div class="spacing"></div>
		<Produits />
		<div class="spacing-between-components"></div>
		<Service />
		<div class="spacing-between-components"></div>
		<RDV />
		<div class="spacing-between-components"></div>
		<Footer />
	</div>
</template>

<script>
/*
	Entry point for vue components
*/

import Navbar from "./Navbar.vue";
import Service from "./Service.vue";
import Produits from "./Produits.vue";
import RDV from "./RDV.vue";
import Footer from "./Footer.vue";

export default {
	name: "Singer",
	components: {
		Navbar,
		Service,
		Produits,
		RDV,
		Footer,
	},
};
</script>

<style lang="css">
.spacing {
	overflow: hidden;
	margin-top: 126px;
}

.spacing-between-components {
	overflow: hidden;
	margin-top: 50px;
}
</style>
