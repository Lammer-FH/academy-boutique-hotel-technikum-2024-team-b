<script>
import { BButton, BCard } from "bootstrap-vue-3";

export default {
  name: "Cards",
  components: { BButton, BCard },

  props: {
    index: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlternativeText: {
      type: String,
      required: true
    },
    cardText: {
      type: String,
      required: false
    },
    primaryButtonRoute: {
      type: String,
      required: true
    },
    primaryButtonText: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <b-card
      :title="title"
      tag="article"
      class="custom-card mb-5"
  >
    <b-container class="image-container">
    <b-img
        :src="imageSrc"
        :alt="imageAlternativeText"
        class="card-img"
    />
      </b-container>
    <b-card-text class="card-text">
      {{ cardText }}
    </b-card-text>
    <b-button :to="primaryButtonRoute" variant="primary">{{ primaryButtonText }}</b-button>
  </b-card>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  /*for aspect ratio 16:9*/
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 2vh;
  margin-top: 2vh;
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.custom-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
