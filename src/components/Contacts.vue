<template>
	<section class="contacts">
		<div class="container contacts__container">
			<div class="contacts__box">
				<h2 class="contacts__title"><Icon :icon="['fas', 'map-marker-alt']" /> Localisation</h2>
				<div class="contacts__separator"></div>
				<div class="contacts__map-box">
					<p>Map here</p>
				</div>
			</div>
			<div class="contacts__box">
				<h2 class="contacts__title"><Icon :icon="['fas', 'envelope']" /> Nous contacter</h2>
				<div class="contacts__separator"></div>
				<ul class="contacts__list">
					<li
						v-for="(contact, key) in contacts"
						:key="key"
						class="contacts__item"
					>
						<a v-if="contact?.link" :href="contact.link" class="contacts__link" title="Aller voir">
							<Icon :icon="contact.icon" /> {{contact.content}}
						</a>
						<span v-else>
							<Icon :icon="contact.icon" /> {{contact.content}}
						</span>
					</li>
				</ul>
			</div>
			<div class="contacts__box">
				<h2 class="contacts__title"><Icon :icon="['fas', 'calendar-alt']" /> Ouvertures</h2>
				<div class="contacts__separator"></div>
				<p class="contacts__about">Notre magasin est ouvert en semaine, n'hésitez pas à prendre contact avec nous les offres promotionnelles et venir nous voir directement !</p>
				<p class="contacts__hours">Horaires: 9h à 11h - 14h à 18h</p>
				<div class="contacts__calendar">
					<div
						v-for="(calendar, key) in calendars"
						:key="key"
						class="contacts__calendar-col"
					>
						<div class="contacts__calendar-row">{{calendar.day}}</div>
						<div :class="calendar.opened ? 'contacts__calendar-row green' : 'contacts__calendar-row red'">
							<Icon v-if="calendar.opened" :icon="['fas', 'check-circle']" />
							<Icon v-else :icon="['fas', 'times-circle']" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container contacts__bottom">
			<div class="contacts__bottom-separator"></div>
			<p class="contacts__bottom-phrase">Singer, la marque de référence en matière de couture : 165 ans de savoir-faire et de notoriété grâce à la qualité, la technologie et la longévité de ses machines à coudre. Notre marque propose aujourd’hui une large gamme de machines à coudre, brodeuses, surjeteuses et accessoires couture.</p>
			<p class="contacts__bottom-phrase">Singer bénéficie surtout d’une organisation constituée de professionnels au service de la créativité et du confort de leurs utilisatrices couvrant la quasi-totalité du territoire français. Conseils, démonstrations, formations ou encore cours de couture sont autant d’atouts qui participent à la qualité du service de l’enseigne.</p>
			<p class="contacts__bottom-phrase">Imaginez, créez, recyclez, customisez sans limite avec les machines à coudre SINGER : « Elles ont la technique, vous avez du talent ! »</p>
		</div>
	</section>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/vue-fontawesome";
import {
	faMapMarkerAlt,
	faEnvelope,
	faCalendarAlt,
	faPhone,
	faCheckCircle,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
	faMapMarkerAlt,
	faEnvelope,
	faCalendarAlt,
	faPhone,
	faCheckCircle,
	faTimesCircle,
	faFacebook,
	faInstagram
);

export default {
	name: "Contacts",
	components: {
		Icon
	},
	data() {
		return {
			contacts: [
				{
					icon: ['fas', 'phone'],
					content: "+33 67 127 891 12"
				},
				{
					icon: ['fas', 'envelope'],
					content: "chantepie@singer.fr"
				},
				{
					icon: ['fab', 'facebook'],
					content: "Notre page Facebook",
					link: "https://facebook.com"
				},
				{
					icon: ['fab', 'instagram'],
					content: "Nous sommes sur Insta !",
					link: "https://instagram.com"
				}
			],
			calendars: [
				{
					day: "L",
					opening: "Matin fermé - 14h à 18h",
					opened: true
				},
				{
					day: "M",
					opening: "9h à 11h - 14h à 18h",
					opened: true
				},
				{
					day: "M",
					opening: "9h à 11h - Fermé après-midi",
					opened: true
				},
				{
					day: "J",
					opening: "9h à 11h - 14h à 18h",
					opened: true
				},
				{
					day: "V",
					opening: "9h à 11h - 14h à 18h",
					opened: true
				},
				{
					day: "S",
					opening: "Etablissement fermé.",
					opened: false
				},
				{
					day: "D",
					opening: "Etablissement fermé.",
					opened: false
				},
			]
		};
	}
};
</script>

<style lang="css">
.contacts {
	background: white;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}

.contacts__container {
	justify-content: space-between;
}

.contacts__box {
	width: 30%;
	padding-bottom: 40px;
}

.contacts__title {
	color: rgb(40, 40, 40);
	font-size: 20pt;
	padding: 20px 0 20px 0;
}

.contacts__separator {
	width: 40%;
	height: 5px;
	background: #e30044;
	border-radius: 3px;
	margin-bottom: 20px;
}

.contacts__map-box {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
	background: rgb(245, 245, 245);
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0px 0px 1px black;
}

.contacts__bottom {
	flex-direction: column;
	padding-bottom: 20px;
}

.contacts__bottom-separator {
	width: 100%;
	height: 2px;
	background: rgb(200, 200, 200);
	margin: auto;
}

.contacts__bottom-phrase {
	padding: 20px 0 0 0;
	color: rgb(120, 120, 120);
	text-align: justify;
	font-size: 10pt;
}

.contacts__item {
	padding: 19px 0;
	color: rgb(80, 80, 80);
	font-size: 13pt;
}

.contacts__item:first-child {
	padding-top: 0;
}

.contacts__item:last-child {
	padding-bottom: 0;
}

.contacts__link {
	color: rgb(80, 80, 80);
}

.contacts__link:hover {
	color: #e30044;
}

.contacts__about {
	margin-bottom: 20px;
	text-align: justify;
}

.contacts__about,
.contacts__hours,
.contacts__calendar-row {
	color: rgb(80, 80, 80);
}

.contacts__calendar .green {
	color: green;
	font-weight: bold;
}

.contacts__calendar .red {
	color: #e30044;
}

.contacts__calendar {
	display: flex;
	width: 100%;
	box-shadow: 0px 0px 1px black;
	background: rgb(245, 245, 245);
	margin-top: 20px;
	border-radius: 5px;
	overflow: hidden;
}

.contacts__calendar-col {
	flex: 1;
}

.contacts__calendar-row {
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 0px 1px black;
	padding: 5px 0;
}

@media only screen and (max-width: 900px) {
	.contacts__container {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.contacts__box {
		width: 100%;
		padding-bottom: 50px;
	}
	.contacts__item {
		padding: 10px 0;
	}
}
</style>
