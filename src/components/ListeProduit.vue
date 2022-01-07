<template>
	<section
		id="produit"
		:class="`section ${
			done === 4 ? 'liste-produit' : 'liste-produit liste-produit--empty'
		}`"
	>
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
				<Loading v-if="done < 4" />
				<div v-else class="list">
					<div class="liste-produit__filter">
						<div class="head">
							<h2 class="title">Nos produits</h2>
							<div class="search">
								<Icon class="icon" icon="search" />
								<input
									class="input"
									type="search"
									placeholder="Rechercher"
								/>
							</div>
						</div>
						<div class="liste-produit__separator"></div>
						<div class="filter">
							<div class="filter-item filter-all">
								<input
									class="checkbox"
									type="radio"
									id="filter-all"
									name="filter"
									:checked="filter.all"
									@change="(e) => handleCheckbox(e, 'all')"
								/>
								<label for="filter-all">
									Tous les produits</label
								>
							</div>
							<div class="filter-item filter-mecanique">
								<input
									class="checkbox"
									type="radio"
									id="filter-mecanique"
									name="filter"
									:checked="filter.mecanique"
									@change="
										(e) => handleCheckbox(e, 'mecanique')
									"
								/>
								<label for="filter-mecanique">
									Machine à coudre mécanique</label
								>
							</div>
							<div class="filter-item filter-electronique">
								<input
									class="checkbox"
									type="radio"
									id="filter-electronique"
									name="filter"
									:checked="filter.electronique"
									@change="
										(e) => handleCheckbox(e, 'electronique')
									"
								/>
								<label for="filter-electronique">
									Machine à coudre électronique</label
								>
							</div>
							<div class="filter-item filter-brodeuse">
								<input
									class="checkbox"
									type="radio"
									id="filter-brodeuse"
									name="filter"
									:checked="filter.brodeuse"
									@change="
										(e) => handleCheckbox(e, 'brodeuse')
									"
								/>
								<label for="filter-brodeuse"> Brodeuse</label>
							</div>
							<div class="filter-item filter-surjeteuse">
								<input
									class="checkbox"
									type="radio"
									id="filter-surjeteuse"
									name="filter"
									:checked="filter.surjeteuse"
									@change="
										(e) => handleCheckbox(e, 'surjeteuse')
									"
								/>
								<label for="filter-surjeteuse">
									Surjeteuse</label
								>
							</div>
						</div>
					</div>
					<CardProduct
						v-for="item in display"
						:key="item.id"
						:product="item"
					/>
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
	getElectronique,
	getBrodeuse,
	getSurjeteuse,
} from "../service/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

export default {
	name: "ListeProduit",
	components: {
		Loading,
		CardProduct,
		Icon,
	},
	data() {
		return {
			filter: {
				all: true,
				mecanique: false,
				electronique: false,
				brodeuse: false,
				surjeteuse: false,
			},
			done: 0,
			liste: {
				mecanique: [],
				electronique: [],
				brodeuse: [],
				surjeteuse: [],
			},
			display: [],
			product: {
				id: "cb02d891-bcec-4db0-80d9-1a07565e4e4a",
				type: "machine-a-coudre-mecanique",
				title: "SUPERA 5523",
				description:
					"Cette gamme de machines à coudre possède de nombreux atouts : coudre des épaisseurs, du jean, des tissus d’ameublement, des toiles cirées ainsi que toutes les coutures traditionnelles. Avec un cadre métallique intérieur robuste, une semelle en acier inoxydable, une vitesse de couture extra-haute et un moteur puissant, cette machine est votre alliée de tous les jours.",
				photo: [
					"https://res.cloudinary.com/dctlti6fj/image/upload/v1639919121/produits/mecanique/Supera-5523-1_rvfxvh.png",
				],
				details: [
					"23 programmes de points",
					"Moteur résistant ultra-rapide 1100 pts/mn",
					"3 positions d’aiguille",
					"Boutonnière automatique 1 temps",
					"Bras libre pour couture circulaire",
					"Enfile-aiguille automatique",
				],
				promotion: {
					type: "reduction",
					name: "Réduction de 45%",
					value: "45%",
				},
				outstock: true,
			},
		};
	},
	mounted() {
		getMecanique().then((data) => {
			this.liste = {
				...this.liste,
				mecanique: [...data],
			};
			this.done++;
		});
		getElectronique().then((data) => {
			this.liste = {
				...this.liste,
				electronique: [...data],
			};
			this.done++;
		});
		getBrodeuse().then((data) => {
			this.liste = {
				...this.liste,
				brodeuse: [...data],
			};
			this.done++;
		});
		getSurjeteuse().then((data) => {
			this.liste = {
				...this.liste,
				surjeteuse: [...data],
			};
			this.done++;
		});
	},
	methods: {
		handleCheckbox(e, name) {
			const status = e.target.checked;
			this.display = [];
			if (name === "all" && status === true) {
				this.filter = {
					all: true,
					mecanique: false,
					electronique: false,
					brodeuse: false,
					surjeteuse: false,
				};
			}
		},
	},
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

.liste-produit__list .filter {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

.liste-produit__list .filter-item {
	margin-right: 20px;
}

.liste-produit__list label {
	color: rgb(80, 80, 80);
}

.liste-produit__list .filter-item:last-child {
	margin-right: 0;
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

.liste-produit__filter .head {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.liste-produit__filter .search {
	display: flex;
	align-items: center;
	margin-right: 20px;
}

.liste-produit__filter .icon {
	color: rgb(80, 80, 80);
	font-size: 20pt;
	margin-right: 10px;
}

.liste-produit__filter .input {
	padding: 10px 20px;
	font-size: 13pt;
	color: rgb(80, 80, 80);
	width: 400px;
	border: none;
	border-radius: 20px;
	background: rgb(245, 245, 245);
	box-shadow: 0px 0px 1px black;
}

.liste-produit__filter .title {
	font-size: 20pt;
	padding: 20px;
	color: rgb(80, 80, 80);
}

.liste-produit__separator {
	width: calc(100% - 40px);
	height: 1px;
	margin: 0 20px;
	background: rgb(200, 200, 200);
}
</style>
