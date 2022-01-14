<template>
	<section class="section service-client">
		<div class="container service-client__container">
			<div class="section-title">
				<div class="vertical-bar"></div>
				<h4 class="title">Les services offertent par le magasin</h4>
			</div>

			<p class="section-paragraph">
				Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
				amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
				ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
				consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
				dolor sit amet consectetur.
			</p>

			<div class="service-shape icon--color">
				<div class="service-shape__circle">
					<Icon icon="thumbs-up" />
				</div>
				<div class="service-shape__linking">
					<div class="service-shape__left">
						<div class="service-shape__inner"></div>
					</div>
					<div class="service-shape__mid"></div>
					<div class="service-shape__right">
						<div class="service-shape__inner"></div>
					</div>
				</div>
				<div class="service-shape__circle">
					<Icon icon="dolly" />
				</div>
			</div>

			<div class="lamarque__item">
				<h3 class="mini-title">
					<Icon icon="thumbs-up" /> – L’Expertise
				</h3>
				<div class="lamarque__box">
					<p class="paragraph">
						Depuis 1851, le nom Singer est synonyme de couture.
						L’esprit de conception pratique et l’innovation créative
						qui ont caractérisé l’entreprise à ses débuts se
						poursuivent et nous continuons à développer des produits
						adaptés à chaque niveau de couture et style de
						couturière. A travers une gamme de machines à coudre
						mécaniques, électroniques, brodeuses et
						surjeteuses/recouvreuses, Singer propose la machine qui
						correspond aux envies et aux besoins de chacun.
					</p>
				</div>
			</div>

			<div class="lamarque__item">
				<h3 class="mini-title"><Icon icon="dolly" /> – Le Service</h3>
				<div class="lamarque__box">
					<p class="paragraph">
						Parce que Singer est toujours dans l’inconscient
						collectif, l’accueil et le sourire des représentants de
						la marque SINGER sont une habitude contribuant à
						l’atmosphère conviviale de ses points de vente. SINGER a
						développé une gamme complète de machines à coudre pour
						convenir tant aux débutantes, rassurées par la qualité
						SINGER, qu’aux couturières confirmées à la recherche de
						produits sophistiqués offrant plus de confort et de
						créativité.
					</p>
					<p class="paragraph bold">
						Dans les magasins Singer France, vous trouverez :
					</p>

					<ul class="list">
						<li class="list__item">Des conseils démonstrations</li>
						<li class="list__item">
							Des formations sur des machines spécifiquess
						</li>
						<li class="list__item">
							Des ateliers de couture assurés par des
							professionnels
						</li>
						<li class="list__item">De la mercerie</li>
						<li class="list__item">
							Un service d’entretien de réparation de machines à
							coudre toutes marques
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
/*
	Entry point for vue components
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { faThumbsUp, faDolly } from "@fortawesome/free-solid-svg-icons";

library.add(faThumbsUp, faDolly);

export default {
	name: "ServiceClient",
	components: {
		Icon,
	},
};
</script>

<style lang="css">
.service-client__container {
	flex-direction: column;
	padding-bottom: 25px;
}

.service-shape {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.service-client .icon--color {
	color: #fff;
	font-size: 40px;
}

.service-shape__circle {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
	width: 100px;
	background-color: #e30044;
	box-shadow: 2px 2px 5px rgb(120, 120, 120);
	border-radius: 50%;
	border: 1px rgb(185, 154, 154) solid;
}

.service-shape__linking {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}

.service-shape__right,
.service-shape__left {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #fff;
	box-shadow: 2px 2px 5px rgb(120, 120, 120);
	border: 2px #e30044 solid;
}

.service-shape__mid {
	width: 80px;
	height: 7px;
	background: #e30044;
}

.lamarque__box {
	background: white;
	padding: 10px 20px;
	box-shadow: 0px 0px 10px rgb(200, 200, 200);
	margin-top: 10px;
}

.mini-title {
	color: #e30044;
	padding-top: 50px;
}

.paragraph {
	color: rgb(80, 80, 80);
	text-align: justify;
	margin: 0;
	padding: 10px 0;
	line-height: 25px;
}

.list {
	list-style-type: disc;
	padding: 0 0 0 50px;
}

.list__item {
	padding: 5px 0;
	color: rgb(80, 80, 80);
}

.bold {
	font-weight: bold;
}
</style>
