<template>
	<l-map :zoom="zoom" :center="center">
		<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
		<l-marker :lat-lng="markerLatLng"></l-marker>
	</l-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
	components: {
		LMap,
		LTileLayer,
		LMarker,
	},
	data() {
		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			attribution:
				'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			zoom: 18,
			center: [48.08930332178957, -1.6213132083998467],
			markerLatLng: [48.08930332178957, -1.6213132083998467],
		};
	},
};
</script>
