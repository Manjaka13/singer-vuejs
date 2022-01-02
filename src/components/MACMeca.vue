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
    <button class="btn" @click="showModal">
      <Icon style="margin-right: 15px" icon="eye" />
      Découvrir
    </button>

    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header> Machine à coudre mécanique </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "MACMeca",
  components: {
    Modal,
  },
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

  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="css">
.mac-item {
  display: inline-flex;
  flex-direction: column;
  width: 24%;
  height: 450px;
  box-shadow: 0px 0px 15px rgb(200, 200, 200);
}

.cover-image {
  width: 100%;
  height: 15vw;
}

.illustration {
  object-fit: cover;
}

.mac-title {
  text-align: center;
  margin-top: auto;
  padding: 20px 20px 0 20px;
  font-size: 15pt;
  width: calc(100% - 40px);
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px auto;
  color: #fff;
  width: 200px;
  font-size: 13pt;
  padding: 10px 20px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.692);
}

.btn:active {
  box-shadow: 0px 0px 10px rgb(160, 42, 42);
}

.mac-item:hover {
  box-shadow: 0px 0px 10px rgb(255, 0, 0);
  transition: 0.35s ease;
}

.mac-item:hover .btn {
  cursor: pointer;
  opacity: 1;
}
</style>
