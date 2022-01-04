<template>
	<section class="section liste-produit">
		<div class="container liste-produit__container">
			<div class="section-title">
				<div class="vertical-bar"></div>
				<h2 class="title">Nos produits</h2>
			</div>
			<p class="section-paragraph">
				Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
				consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
				amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
				sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
			</p>
			<CardProduct :product="product" />
		</div>
	</section>
</template>

<script>
import CardProduct from "./CardProduct.vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

// library.add(faEye);

export default {
	name: "ListeProduit",
	components: {
		CardProduct
	},
	data() {
		return {
			product: {
				id: "cb02d891-bcec-4db0-80d9-1a07565e4e4a",
				type: "machine-a-coudre-mecanique",
				title: "SUPERA 5523",
				description: "Cette gamme de machines à coudre possède de nombreux atouts : coudre des épaisseurs, du jean, des tissus d’ameublement, des toiles cirées ainsi que toutes les coutures traditionnelles. Avec un cadre métallique intérieur robuste, une semelle en acier inoxydable, une vitesse de couture extra-haute et un moteur puissant, cette machine est votre alliée de tous les jours.",
				photo: [
				"https://res.cloudinary.com/dctlti6fj/image/upload/v1639919121/produits/mecanique/Supera-5523-1_rvfxvh.png"
				],
				details: [
					"23 programmes de points",
					"Moteur résistant ultra-rapide 1100 pts/mn",
					"3 positions d’aiguille",
					"Boutonnière automatique 1 temps",
					"Bras libre pour couture circulaire",
					"Enfile-aiguille automatique"
				],
				promotion: {
					type: "reduction",
					name: "Réduction de 45%",
					value: "45%"
				},
				outstock: true
			}
		};
	}
};
</script>

<style lang="css">
.liste-produit__container {
	flex-direction: column;
}
</style>
