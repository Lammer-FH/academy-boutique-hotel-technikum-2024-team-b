<script>
import {BButton, BCard} from "bootstrap-vue-3";

export default {
  name: "Cards",
  components: {BButton, BCard},

  props: {
    index:{
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
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
    },
    secondaryButtonRoute: {
      type: String,
      required: false
    },
    secondaryButtonText: {
      type: String,
      required: false
    }
  }
}
</script>


<template>

  <b-card
      :index="index"
      :title="title"
      :img-src="imageSrc"
      :img-alt="imageAlternativeText"
      tag="article"
      class="card mb-5 custom-card-image"
  >
    <b-card-subtitle>
      {{ subtitle}}
    </b-card-subtitle>
    <b-card-text>
      {{ cardText }}
    </b-card-text>
    <b-button :to="primaryButtonRoute" variant="primary">{{primaryButtonText }}</b-button>
    <b-button v-if="secondaryButtonRoute !== undefined" :to="secondaryButtonRoute" variant="secondary">{{secondaryButtonText }}</b-button>
  </b-card>
</template>


<style scoped>
.card {
  width: 400px;

}

.custom-card-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>