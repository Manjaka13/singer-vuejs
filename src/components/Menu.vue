<template>
	<section :class="menuOpened ? 'menu menu--opened' : 'menu'" @click="triggerClicked">
		<div class="menu__window">
			<div class="container menu__container">
				<h1 class="menu__title">Singer Chantepie</h1>
				<div class="menu__separator"></div>
				<ul class="menu__list">
					<li v-for="(section, key) in sections" :key="key" class="menu__item">
						<a
							class="menu__link"
							:href="section.link"
							:title="section.title"
						>
							<Icon class="menu__icon" :icon="section.icon" />{{section.name}}
						</a>
						<div class="menu__underline"></div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import {
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faStar,
	faWrench,
	faShoppingCart,
	faEnvelope
);

export default {
	name: "Page",
	props: {
		menuOpened: {
			type: Boolean,
			default: false
		}
	},
	components: {
		Icon
	},
	data() {
		return {
			sections: [
				{
					name: "Nos promotions",
					title: "Profitez de nos dernières promos !",
					icon: "star",
					link: "#promo"
				},
				{
					name: "Offres et services",
					title: "Découvrez les services chez Singer Chantepie",
					icon: "wrench",
					link: "#service"
				},
				{
					name: "Nos produits",
					title: "Les articles et produits en vente",
					icon: "shopping-cart",
					link: "#produit"
				},
				{
					name: "Contacts",
					title: "Nous joindre",
					icon: "envelope",
					link: "#contact"
				}
			]
		};
	},
	methods: {
		triggerClicked(e) {
			e.preventDefault();
			this.$emit("menuToggle");
		}
	}
};
</script>

<style lang="css">
.menu {
	width: 100%;
	height: 100vh;
	background: rgba(255, 255, 255, 0.6);
	position: fixed;
	top: -400px;
	left: 0;
	z-index: 12;
	transition: all 0.2s ease-out;
	pointer-events: none;
	opacity: 0;
}

.menu--opened {
	pointer-events: auto;
	opacity: 1;
	top: 76px;
}

.menu__window {
	background: white;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.menu__container {
	flex-direction: column;
	align-items: center;
}

.menu__title {
	font-size: 30pt;
	color: rgb(50, 50, 50);
	padding: 20px 0;
}

.menu__separator {
	width: 60%;
	height: 5px;
	background: #e30044;
	border-radius: 3px;
	margin-bottom: 20px;
}

.menu__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.menu__item {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0;
}

.menu__link {
	display: inline-block;
	color: rgb(100, 100, 100);
	font-weight: bold;
	padding: 20px 10px;
}

.menu__icon {
	margin-right: 10px;
}

.menu__underline {
	width: 0;
	height: 5px;
	border-radius: 3px;
	background: #e30044;
	box-shadow: 0px 1px 2px black;
	transition: all 0.2s ease-out;
}

.menu__item:hover .menu__underline {
	width: 60px;
}

.menu__item:hover .menu__link {
	color: #e30044;
}

@media only screen and (max-width: 900px) {
	.menu__separator {
		margin-bottom: 10px;
	}
	.menu__list {
		flex-direction: column;
	}
	.menu__link {
		padding: 15px;
	}
	.menu__underline {
		display: none;
	}
	.menu__title {
		font-size: 20pt;
		padding: 10px 0;
	}
}
</style>
