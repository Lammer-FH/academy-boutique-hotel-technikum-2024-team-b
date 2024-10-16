<script setup>
import { BCard, BButton } from "bootstrap-vue-3"; // Importing necessary components
</script>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Card 1",
          text: "This is the description for the first card. It explains something cool!",
          imageSrc: "https://picsum.photos/600/300/?image=25",
          imageAlternativeText: "Picture of Bed",
          hrefButton: "#"
        },
        {
          title: "Card 2",
          text: "This is the second card with another description. More awesome stuff here.",
          imageSrc: "https://picsum.photos/600/300/?image=36",
          imageAlternativeText: "Beautiful Landscape",
          hrefButton: "#"
        },
        {
          title: "Card 3",
          text: "Third card text with another image. Showing different content dynamically.",
          imageSrc: "https://picsum.photos/600/300/?image=50",
          imageAlternativeText: "City Skyline",
          hrefButton: "#"
        }
      ]
    };
  }
};
</script>

<template>
  <div class="d-flex flex-wrap">
    <b-card
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :img-src="item.imageSrc"
        :img-alt="item.imageAlternativeText"
        img-top
        tag="article"
        style="max-width: 20rem; margin: 10px;"
        class="mb-2"
    >
      <b-card-text>
        {{ item.text }}
      </b-card-text>
      <b-button :href="item.hrefButton" variant="primary">Mehr erfahren</b-button>
    </b-card>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
