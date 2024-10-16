<script setup>
import {BCard} from "bootstrap-vue-3";
</script>
<script>
export default {
  data() {
    return {
      title: "Header",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
      imageSrc: "https://picsum.photos/600/300/?image=25",
      imageAlternativeText: "Picture of Bed",
      hrefButton: "#"
    }
  }
}
</script>
<template>
  <div>
    <b-card
        :title="title"
        :img-src="imageSrc"
        :img-alt="imageAlternativeText"
        img-top=""
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>

      <b-button :href="hrefButton" variant="primary">Mehr erfahren</b-button>
    </b-card>
  </div>
</template>

<style scoped>

</style>