import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
	faChevronCircleLeft,
	faChevronCircleRight,
	faTimes,
	faEye,
	faAt,
	faPhone,
	faMapMarkerAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/general.css";
// import VueGallery from "vue-gallery";

library.add(
	faChevronCircleLeft,
	faChevronCircleRight,
	faTimes,
	faEye,
	faAt,
	faPhone,
	faMapMarkerAlt,
	faEnvelope,
	faFacebook,
	faInstagram
);

createApp(App).component("Icon", FontAwesomeIcon).mount("#app");
