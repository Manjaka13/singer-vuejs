<template>
	<article v-if="product" class="card-product">
		<figure class="card-product__representation">
			<img class="card-product__image" :src="product.photo ? product.photo[0] : '/machine.jpg'" alt="Machine" />
			<p :class="`card-product__badge card-product__badge${product.outstock ? '--red' : (typeof(product.promotion.type) == 'string' ? '--green' : '--hidden')}`">
				{{product.outstock ? "En rupture de stock" : (typeof(product.promotion.type) == "string" ? "En promotion" : "")}}
			</p>
		</figure>
		<h3 class="card-product__title">{{product.title}}</h3>
		<p class="card-product__price">Produit ajouté le: 09/10/2021</p>
		<div class="card-product__separator"></div>
		<p class="card-product__description">{{product.description}}</p>
		<div class="card-product__discover-box">
			<a class="card-product__discover" :href="`/details/${product.id}`" title="Découvrir ce produit">
				Découvrir
			</a>
		</div>
	</article>
</template>

<script>
export default {
	name: "ListeProduit",
	props: {
		product: {
			type: Object,
			default: null
		}
	}
};
</script>

<style lang="css">
.card-product {
	width: 300px;
	height: 450px;
	overflow: hidden;
	background: white;
	box-shadow: 0px 0px 1px black;
	margin-bottom: 10px;
}

@media only screen and (max-width: 1380px) {
	.card-product {
		width: 370px;
	}
}

@media only screen and (max-width: 1255px) {
	.card-product {
		width: 340px;
	}
}

@media only screen and (max-width: 1170px) {
	.card-product {
		width: 300px;
	}
}

@media only screen and (max-width: 1030px) {
	.card-product {
		width: 420px;
	}
}

@media only screen and (max-width: 950px) {
	.card-product {
		width: 370px;
	}
}

@media only screen and (max-width: 840px) {
	.card-product {
		width: 340px;
	}
}

@media only screen and (max-width: 770px) {
	.card-product {
		width: 320px;
	}
}

@media only screen and (max-width: 740px) {
	.card-product {
		width: 300px;
	}
}

@media only screen and (max-width: 700px) {
	.card-product {
		width: 100%;
	}
}

.card-product__representation {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
	overflow: hidden;
	position: relative;
}

.card-product__badge-list {
	display: flex;
	justify-content: flex-end;
	position: absolute;
	bottom: 0;
	right: 20px;
	width: 100%;
}

.card-product__badge {
	position: absolute;
	bottom: 20px;
	right: 20px;
	padding: 5px 10px;
	border-radius: 20px;
	background: rgba(0, 0, 0, 0.6);
	color: white;
	font-size: 10pt;
	border: 3px white solid;
	box-shadow: 1px 1px 2px black;
	pointer-events: none;
}

.card-product__badge--green {
	background: rgba(0, 120, 0, 0.7);
}

.card-product__badge--red {
	background: rgba(255, 0, 0, 0.7);
}

.card-product__badge--hidden {
	display: none;
}

.card-product__image {
	width: auto;
	height: 100%;
	transition: all 0.5s ease-out;
}

.card-product:hover .card-product__image {
	height: 120%;
}

.card-product__title {
	padding: 20px 20px 10px 20px;
	color: rgb(80, 80, 80);
}
.card-product__price {
	padding: 0 20px 10px 20px;
	color: rgb(140, 140, 140);
}

.card-product__separator {
	width: calc(100% - 40px);
	height: 3px;
	margin: 0 20px 20px 20px;
	background: rgb(200, 200, 200);
}

.card-product__description {
	padding: 0 20px;
	color: rgb(80, 80, 80);
	text-align: justify;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	min-height: 72px;
}

.card-product__discover-box {
	display: flex;
	justify-content: center;
	width: 100%;
	padding-top: 20px;
}

.card-product__discover {
	transition: all 0.2s ease-out;
	padding: 10px 20px;
	background: rgb(227, 0, 68);
	color: white;
	border: none;
	cursor: pointer;
}

.card-product__discover:hover {
	background: lighten(rgb(227, 0, 68), 15%);
}

.card-product__discover:active {
	background: darken(rgb(227, 0, 68), 15%);
}
</style>
