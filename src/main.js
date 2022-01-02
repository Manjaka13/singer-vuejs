import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faEye,
  faAt,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
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
