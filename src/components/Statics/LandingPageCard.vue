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
      class="card mb-5 custom-card"
  >
    <img
        :src="imageSrc"
        :alt="imageAlternativeText"
        class="card-img"
    />
    <b-card-text>
      {{ cardText }}
    </b-card-text>
    <b-button :to="primaryButtonRoute" variant="primary">{{ primaryButtonText }}</b-button>
  </b-card>
</template>

<style scoped>

.custom-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.card-img {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  border-radius: 0.25rem;
}

.card-text {
  flex-grow: 1;
  margin-top: 5vh;
}
</style>
