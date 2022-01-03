<template>
	<div class="mac-item">
		<figure class="illustration">
			<img
				class="cover-image"
				:src="cover"
				alt="machine à coudre mecanique illustration"
			/>
		</figure>
		<h4 class="mac-title">{{ marque }}</h4>

		<button class="btn" @click="showModal">
			<Icon style="margin-right: 15px" icon="eye" />
			Découvrir
		</button>
	</div>

	<Modal v-show="isModalVisible" @close="closeModal">
		<template v-slot:header> Machine à coudre Electrique </template>

		<template v-slot:body>
			<div class="content-left"></div>

			<div class="content-right">
				<h2 class="title2">Description du produit :</h2>
				<div class="separator3"></div>
			</div>
		</template>
	</Modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
	name: "MACElec",
	components: {
		Modal,
	},
	props: {
		marque: {
			type: String,
			default: "",
		},
		cover: {
			type: String,
			default: "",
		},
	},

	data() {
		return {
			isModalVisible: false,
		};
	},
	methods: {
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
	},
};
</script>
