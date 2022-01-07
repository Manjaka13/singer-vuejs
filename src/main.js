import { createApp } from "vue";
import Page from "./components/Page.vue";
import "./assets/general.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import {
// 	faChevronCircleLeft,
// 	faChevronCircleRight,
// 	faTimes,
// 	faEye,
// 	faAt,
// 	faPhone,
// 	faMapMarkerAlt,
// 	faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// // import VueGallery from "vue-gallery";

// library.add(
// 	faChevronCircleLeft,
// 	faChevronCircleRight,
// 	faTimes,
// 	faEye,
// 	faAt,
// 	faPhone,
// 	faMapMarkerAlt,
// 	faEnvelope,
// 	faFacebook,
// 	faInstagram
// );

createApp(Page)
	/*.component("Icon", FontAwesomeIcon)*/
	.mount("#app");
