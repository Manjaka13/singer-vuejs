<template>
  <div>
    <Navbar />
    <div class="spacing"></div>
    <Produits />
    <div class="spacing-between-components"></div>
    <Service />
    <div class="spacing-between-components"></div>
    <RDV />
    <div class="spacing-between-components"></div>

    <Footer />
    <div class="spacing-between-components"></div>

    <Copyright />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Produits from "./components/Produits.vue";
import Service from "./components/Service.vue";
import Footer from "./components/Footer.vue";
import Copyright from "./components/Copyright.vue";
import RDV from "./components/RDV.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Produits,
    Service,
    RDV,

    Footer,
    Copyright,
  },
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.spacing {
  overflow: hidden;
  margin-top: 126px;
}

.spacing-between-components {
  overflow: hidden;
  margin-top: 50px;
}
</style>
