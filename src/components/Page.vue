<template>
	<div class="page">
		<Navigation
			:menuOpened="menuOpened"
			@menuToggle="menuToggle"
		/>
		<Menu
			:menuOpened="menuOpened"
			@menuToggle="menuToggle"
		/>
		<ChoixMachine />
		<ListeProduit />
		<Contacts />
		<Copyright />
	</div>
</template>

<script>
import Navigation from "./Navigation.vue";
import Menu from "./Menu.vue";
import ChoixMachine from "./ChoixMachine.vue";
import ListeProduit from "./ListeProduit.vue";
import Contacts from "./Contacts.vue";
import Copyright from "./Copyright.vue";

export default {
	name: "Page",
	components: {
		Navigation,
		Menu,
		Contacts,
		ChoixMachine,
		ListeProduit,
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
}
</style>
