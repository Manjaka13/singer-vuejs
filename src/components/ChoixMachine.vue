<template>
	<section class="choix-machine">
		<div class="container choix-machine__container">
			<div class="section-title">
				<div class="vertical-bar"></div>
				<h2 class="title">Quelle machine recherchez-vous ?</h2>
			</div>
			<p class="section-paragraph">
				Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
				consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
				amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
				sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
			</p>
			<ul class="choixmachine__list">
				<li
					v-for="(item, key) in typeMachine"
					:key="key"
					class="choixmachine__list-item"
				>
					<img class="image" :src="item.image" :alt="item.name" />
					<div class="name">
						<a class="view" :href="item.link" title="Découvrir ce type de produit">
							<Icon icon="eye" /> Jetter un oeil
						</a>
						<div class="content">
							<h3 class="type-name">{{item.name}}</h3>
							<div class="separator"></div>
							<p class="about">{{item.description}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import img1 from "../assets/types/machine mecanique.jpg";
import img2 from "../assets/types/machine electronique.jpg";
import img3 from "../assets/types/brodeuse.jpg";
import img4 from "../assets/types/surjeteuse.jpg";

library.add(faEye);

export default {
	name: "ChoixMachine",
	components: {
		Icon
	},
	data() {
		return {
			typeMachine: [
				{
					name: "Machine à coudre mécanique",
					description:
						"Parcourir notre large catalogue de marques de machines à coudre totalement mécanique.",
					image: img1,
					link: "#mecanique"
				},
				{
					name: "Machine à coudre éléctronique",
					description:
						"Nous avons plusieurs marques de machines à coudres qui eux sont éléctroniques.",
					image: img2,
					link: "#electronique"
				},
				{
					name: "Brodeuse",
					description:
						"Chez Singer, vous pouvez choisir parmi une large liste dans notre catalogue pour les brodeuses.",
					image: img3,
					link: "#brodeuse"
				},
				{
					name: "Surjeteuse",
					description:
						"Avec une grande collection de marques de surjeteuses vous trouverez à coup sûr votre bonheur.",
					image: img4,
					link: "#surjeteuse"
				},
			]
		};
	}
};
</script>

<style lang="css">
.choix-machine__container {
	flex-direction: column;
}

.choixmachine__list {
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
	flex-wrap: wrap;
}

.choixmachine__list-item {
	transition: all 0.2s ease-out;
	width: 24%;
	height: 400px;
	overflow: hidden;
	box-shadow: 0px 0px 1px black;
	position: relative;
	display: flex;
	justify-content: center;
}

.choixmachine__list-item .name {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	transition: all 0.3s ease-out;
	position: absolute;
	bottom: -100%;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0);
	opacity: 0;
}

.choixmachine__list-item:hover {
	box-shadow: 0px 0px 10px #646464;
}

.choixmachine__list-item:hover .name {
	background: rgba(0, 0, 0, 0.4);
	bottom: 0;
	opacity: 1;
}

.choixmachine__list-item .view {
	transition: all 0.2s ease-out;
	margin-bottom: 20px;
	padding: 10px 20px;
	border: none;
	cursor: pointer;
	background: white;
	color: #505050;
}

.choixmachine__list-item .view:hover {
	background: #e6e6e6;
	color: black;
}

.choixmachine__list-item .view:active {
	background: #fff;
}

.choixmachine__list-item .content {
	background: #e30044;
	box-shadow: 0px 0px 2px black;
	pointer-events: none;
}

.choixmachine__list-item .type-name {
	margin: 0;
	padding: 0;
	padding: 10px;
	text-align: center;
	color: white;
	font-size: 11pt;
}

.choixmachine__list-item .separator {
	width: 30%;
	height: 3px;
	background: white;
	border-radius: 3px;
	margin: auto;
}

.choixmachine__list-item .about {
	font-size: 10pt;
	color: white;
	padding: 10px;
	margin: 0;
	text-align: justify;
}

@media only screen and (max-width: 800px) {
	.choixmachine__list-item {
		width: 49%;
		margin-bottom: 2%;
	}	
}

@media only screen and (max-width: 500px) {
	.choixmachine__list-item {
		width: 100%;
		margin-bottom: 20px;
	}	
}
</style>
