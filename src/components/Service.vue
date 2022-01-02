<template>
  <div class="service">
    <div class="card">
      <div class="section-title">
        <div class="vertical-bar"></div>
        <h2 class="title">Service offert par le magasin</h2>
      </div>

      <p class="section-paragraph">
        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor
        sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
        ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
        consectetur.
      </p>
    </div>
  </div>
</template>

<script>
/*
	Entry point for vue components
*/

export default {
  name: "Service",
};
</script>

<style lang="css">
.service {
  width: 90%;
  /* Centering stuffs using the spaghetti-code-no-jutsu */
  margin-left: auto;
  margin-right: auto;
}

.card {
  overflow: hidden;
  padding: 50px 80px 50px 80px;
  border: 1px solid #e30044;
  box-shadow: 0px 0px 10px #e30044;
  transition: 0.3s ease-out;
}
.section-title {
  display: flex;
  align-items: center;
  padding: 20px 0 20px 0;
}

.vertical-bar {
  width: 5px;
  height: 40px;
  background: red;
  margin-right: 20px;
}

.title {
  font-size: 30pt;
  margin: 0;
  padding: 0;
  color: rgb(70, 70, 70);
}

.section-paragraph {
  font-size: 15pt;
  margin: 0;
  padding: 0 0 20px 0;
  text-align: justify;
  color: rgb(85, 85, 85);
}
</style>
