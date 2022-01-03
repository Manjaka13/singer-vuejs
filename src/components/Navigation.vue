<template>
	<nav :class="menuOpened ? 'navigation navigation--opened' : 'navigation'">
		<div class="container navigation__container">
			<div class="navigation__logo">
				<figure class="navigation__logo-box">
					<img
						class="navigation__image"
						src="../assets/singer.png"
						alt="Logo Singer France"
					/>
				</figure>
				<figure class="navigation__logo-box">
					<img
						class="navigation__image"
						src="../assets/singer-text.png"
						alt="Logo Texte Singer France"
					/>
				</figure>
			</div>

			<button
				class="trigger"
				:title="menuOpened ? 'Fermer le plan du site' : 'Ouvrir le plan du site'"
				@click="triggerClicked"
			>
				<Icon icon="bars" />
			</button>
		</div>
	</nav>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default {
	name: "Navigation",
	props: {
		menuOpened: {
			type: Boolean,
			default: false
		}
	},
	components: {
		Icon
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
.navigation {
	display: flex;
	justify-content: center;
	width: 100%;
	height: 76px;
	background: #e30044;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 13;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.navigation__container {
	height: 100%;
	justify-content: space-between;
	align-items: center;
}

.navigation__logo {
	display: flex;
	align-items: center;
	height: 70%;
}

.navigation__logo-box {
	margin: 0;
	height: 100%;
}

.navigation__logo-box:first-child {
	margin-right: 20px;
}

.navigation__image {
	height: 100%;
}

.navigation .trigger {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 3px white solid;
	background: transparent;
	color: white;
	font-size: 20pt;
	cursor: pointer;
	transition: all 0.2s ease-out;
}

.navigation .trigger:hover,
.navigation--opened .trigger {
	font-size: 25pt;
	background: white;
	color: #e30044;
}

@media only screen and (max-width: 400px) {
	.navigation__logo {
		height: 50%;
	}
	.navigation__logo-box:first-child {
		display: none;
	}
}

</style>
