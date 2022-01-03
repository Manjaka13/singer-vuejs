<template>
	<transition name="modal-fade-scale">
		<div class="modal-backdrop">
			<div
				class="popup"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
				<header class="modal-header" id="modalTitle">
					<slot name="header"> This is the default title! </slot>
					<button type="button" class="button-close" @click="close">
						<Icon icon="times" />
					</button>
				</header>

				<section class="modal-body" id="modalDescription">
					<slot name="body">
						this is the default
						<body></body
					></slot>
				</section>

				<footer class="modal-footer">
					<button
						type="button"
						class="button-green"
						@click="close"
						aria-label="Close modal"
					>
						Fermer
					</button>
				</footer>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: "Popup",
	components: {},
	methods: {
		close() {
			this.$emit("close");
		},
	},
};
</script>

<style lang="css">
.popup {
	width: 50%;
	height: 50vh;
	background: #ffffff;
	border-radius: 12px;
	box-shadow: 2px 2px 20px 1px;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
}

.modal-fade-scale {
	transform: scale(0);
	opacity: 0;
	-webkit-transition: all 0.25s linear;
	-o-transition: all 0.25s linear;
	transition: all 0.25s linear;
}

.modal-fade-scale.in {
	opacity: 1;
	transform: scale(1);
}
</style>
