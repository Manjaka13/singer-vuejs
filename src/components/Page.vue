<template>
	<div class="page">
		<Navigation
			:menuOpened="menuOpened"
			@menuToggle="menuToggle"
		/>
		
		<!-- Sitemap -->
		<Menu
			:menuOpened="menuOpened"
			@menuToggle="menuToggle"
		/>


		<p>STARTOOOO !!!!</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>Filling up space</p>
		<p>ENDOOOOO !!!!</p>

		<Contacts />
		<Copyright />
	</div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Menu from "./Menu.vue";
import Contacts from "./Contacts.vue";
import Copyright from "./Copyright.vue";

export default {
	name: "Page",
	components: {
		Navigation,
		Menu,
		Contacts,
		Copyright
	},
	data() {
		return {
			menuOpened: false
		};
	},
	methods: {
		menuToggle() {
			this.menuOpened = !this.menuOpened;
			console.log("Toggle");
		}
	}
};
</script>

<style lang="css">
.page {
	width: 100%;
	height: calc(100vh - 76px);
	overflow: auto;
	padding-top: 76px;
	box-shadow: 0px 0px 10px lime inset;
}
</style>
