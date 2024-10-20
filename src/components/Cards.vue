<script>
import {BButton, BCard} from "bootstrap-vue-3";

export default {
  name: "CardsLandingPage",
  components: {BButton, BCard},

  data() {
    return {
      items: [
        {
          title: "Boutique-Hotel Technikum",
          text: "Entdecken Sie das Boutique-Hotel Technikum, wo moderner Komfort auf zeitlose Eleganz trifft. Entspannen Sie in stilvollen Zimmern und gemütlichem Ambiente.",
          imageSrc: "/images/About/hotel_outside.webp",
          imageAlternativeText: "Picture of Hotel",
          RouteButton: "about"
        },
        {
          title: "Unsere Zimmer",
          text: "Unsere Zimmer im Boutique-Hotel Technikum bieten stilvolles Design, modernen Komfort und gemütliche Atmosphäre für einen unvergesslichen Aufenthalt.",
          imageSrc: "/images/Rooms/2.jpeg",
          imageAlternativeText: "Picture of a Room",
          RouteButton: "#"
        },
        {
          title: "So finden Sie uns",
          text: "Die Anreise zum Boutique-Hotel Technikum ist einfach. Genießen Sie eine zentrale Lage mit hervorragenden Verkehrsanbindungen für eine stressfreie Ankunft",
          imageSrc: "/images/GettingThere/location_stock_photo.jpg",
          imageAlternativeText: "Picture of the Way",
          RouteButton: "getting-here"
        }
      ]
    }
  }
}
</script>


<template>
  <b-card-group deck>
    <b-card
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :img-src="item.imageSrc"
        :img-alt="item.imageAlternativeText"
        tag="article"
        class="card m-5"
    >
      <b-card-text>
        {{ item.text }}
      </b-card-text>
      <b-button :to="item.RouteButton" variant="primary">Mehr erfahren</b-button>
    </b-card>
  </b-card-group>
</template>
<style scoped>
.card{
 width: 254px;
}
</style>