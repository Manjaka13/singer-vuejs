<template>
	<footer class="footer">
		<div class="container-footer">
			<div className="item">
				<h2 className="title1">Où nous trouver</h2>
				<div className="separator"></div>
			</div>

			<div id="contacts" class="item">
				<h2 class="title1">Besoin d&apos;aide ?</h2>
				<div class="separator"></div>
				<ul class="list">
					<li class="list-item">
						<span title="e-mail">
							<Icon icon="{faAddressCard}" />
							contact@singerfrance.fr
						</span>
					</li>
					<li class="list-item">
						<span title="telephone">
							<Icon icon="{faPhone}" /> 02 23 62 34 82
						</span>
					</li>

					<li class="list-item">
						<span title="Facebook">
							<Icon icon="{faPhone}" /> Facebook here
						</span>
					</li>
					<li class="list-item">
						<span title="Instagram">
							<Icon icon="{faPhone}" /> Instagram here
						</span>
					</li>
				</ul>
			</div>

			<div class="item">
				<h2 class="title1">Newsletter</h2>
				<div class="separator"></div>
				<p class="text">
					Pour souscrire à notre newsletter veuillez indiquer votre
					e-mail. Nous promettons de ne pas envoyer de publicités
					invasives.
				</p>
				<form class="form">
					<input
						class="input"
						type="email"
						placeholder="Entrer votre e-mail"
						required
					/>
					<button class="submit" type="submit">
						<Icon icon="{faEnvelope}" />
					</button>
				</form>
			</div>
		</div>
	</footer>
</template>

<script>
/*
	Entry point for vue components
*/

/*  Page display blank  if I put these
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAddressCard,
	faPhone,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAddressCard, faPhone, faMapMarkerAlt, faEnvelope);*/

export default {
	name: "Footer",
	components: {
		//Icon: FontAwesomeIcon,
	},
};
</script>

<style lang="css">
* {
	list-style: none;
	text-decoration: none;
}

.footer {
	background: white;
	box-shadow: 0px 0px 10px rgb(200, 200, 200);
}

.container-footer {
	display: flex;
	padding-bottom: 20px;
}

.item {
	width: calc(100% / 3);
	flex: 1;
}

.title1 {
	margin: 0;
	padding: 20px;
	color: rgb(80, 80, 80);
}

.list {
	padding: 10px 0 10px 0;
	margin: 0;
}
.list-item {
	padding: 10px 0 10px 20px;
}
.link {
	transition: 0.5s;
	color: rgb(120, 120, 120);
}

.separator {
	width: 30%;
	height: 5px;
	background: #e30044;
	margin: 0 0 0 20px;
}

.text {
	text-align: justify;
	padding: 20px;
	margin: 0;
	color: rgb(120, 120, 120);
}
.form {
	width: calc(100% - 40px);
	padding: 0;
	margin: 0 20px 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 1px black;
}

.input {
	width: 100%;
	padding: 10px 20px;
	border: none;
	background: rgb(245, 245, 245);
}
.submit {
	border: none;
	padding: 10px 20px;
	background: #e30044;
	color: white;
	cursor: pointer;
}

.map {
	width: 300px;
}
</style>
