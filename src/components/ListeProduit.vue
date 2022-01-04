<template>
	<section id="produit" :class="`section ${done === 1 ? 'liste-produit' : 'liste-produit liste-produit--empty'}`">
		<div class="container liste-produit__container">
			<!-- <div class="section-title">
				<div class="vertical-bar"></div>
				<h2 class="title">Nos produits</h2>
			</div>
			<p class="section-paragraph">
				Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
				consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
				amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
				sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
			</p> -->
			<div class="liste-produit__list">
				<Loading v-if="done != 1" />
				<div v-else class="list">
					<div class="liste-produit__filter">
						<h2 class="title">Nos produits</h2>
					</div>
					<CardProduct v-for="item in liste.mecanique" :key="item.id" :product="item" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Loading from "./Loading.vue";
import CardProduct from "./CardProduct.vue";
import {
	getMecanique,
	// getElectronique,
	// getBrodeuse,
	// getSurjeteuse
} from "../service/";

export default {
	name: "ListeProduit",
	components: {
		Loading,
		CardProduct
	},
	data() {
		return {
			done: 0,
			liste: {
				mecanique: [],
				electronique: [],
				brodeuse: [],
				surjeteuse: [],
			},
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
	},
	mounted() {
		getMecanique().then(data => {
			this.liste = {
				...this.liste,
				mecanique: [...data]
			};
			this.done ++;
		});
		// getElectronique().then(data => {
		// 	this.liste = {
		// 		...this.liste,
		// 		electronique: [...data]
		// 	};
		// 	this.done ++;
		// });
		// getBrodeuse().then(data => {
		// 	this.liste = {
		// 		...this.liste,
		// 		brodeuse: [...data]
		// 	};
		// 	this.done ++;
		// });
		// getSurjeteuse().then(data => {
		// 	this.liste = {
		// 		...this.liste,
		// 		surjeteuse: [...data]
		// 	};
		// 	this.done ++;
		// });
	}
};
</script>

<style lang="css">
.liste-produit__container {
	flex-direction: column;
}

.liste-produit__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	min-height: 400px;
}

.liste-produit--empty .liste-produit__list {
	justify-content: center;
	align-items: center;
	background: white;
	box-shadow: 0px 0px 1px black;
}

.liste-produit__list .list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.liste-produit__filter {
	width: 100%;
	background: white;
	box-shadow: 0px 0px 1px black;
	margin-bottom: 20px;
	/*position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 5;*/
}

.liste-produit__filter .title {
	font-size: 20pt;
	padding: 20px;
	color: rgb(80, 80, 80);
}
</style>
