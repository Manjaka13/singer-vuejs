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

    <button class="btn">
      <Icon style="margin-right: 15px" icon="eye" />
      Découvrir
    </button>
  </div>
</template>

<script>
export default {
  name: "Surjeteuse",
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
};
</script>
