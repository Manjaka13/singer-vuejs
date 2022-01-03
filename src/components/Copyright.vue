<template>
	<footer class="copyright">
		<div class="container copyright__container">
			<p class="copyright__text">
				Fait avec <Icon icon="heart" /> par <a class="copyright__link" href="https://www.linkedin.com/in/rakotoarisoa-tahiriniaina-andrian-4a01aa211/" title="Voir sur LinkedIn">Tahir</a> et <a class="copyright__link" href="https://www.linkedin.com/in/harijaona-rajaonson/" title="Voir sur LinkedIn">Hari</a>
			</p>
			<p class="copyright__text">
				Copyright © {{ new Date().getFullYear() }} Singer Chantepie, Tous droits réservés.
			</p>
		</div>
	</footer>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);

export default {
	name: "Copyright",
	components: {
		Icon
	},
};
</script>

<style lang="css">
.copyright {
	background: #e30044;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.copyright__container {
	justify-content: center;
}

.copyright__text {
	margin: 0;
	padding: 20px 0;
	color: white;
	font-weight: bold;
}

.copyright__text:first-child {
	margin-right: 10px;
}

.copyright__text:last-child {
	margin-left: 10px;
}

.copyright__link {
	color: rgb(230, 230, 230);
	text-shadow: 0px 1px 2px black;
	transition: all 0.2s ease-out;
}

.copyright__link:hover {
	color: white;
	text-shadow: 0px 0px 3px white;
}

@media only screen and (max-width: 730px) {
	.copyright__container {
		flex-direction: column;
	}
	.copyright__text {
		margin: 0;
		text-align: center;
	}
	.copyright__text:first-child {
		padding: 20px 0 5px 0;
	}
	.copyright__text:last-child {
		padding: 5px 0 20px 0;
	}
}

</style>
