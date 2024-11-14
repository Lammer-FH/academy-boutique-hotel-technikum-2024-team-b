<script>
import Navbar from "@/components/NavbarHeader.vue";
import Cards from "@/components/LandingPageCard.vue";
import headingLandingpage from "@/components/HeadingLandingpage.vue";
import {BCardGroup} from "bootstrap-vue-3";

export default {
  name: "LandingpageView",
  components: {
    BCardGroup,
    headingLandingpage,
    Navbar,
    Cards
  },
  data() {
    return {
      // for the purpose of code readability I use contents for plural
      contents: [
        {
          title: "Boutique-Hotel Technikum",
          cardText: "Entdecken Sie das Boutique-Hotel Technikum, wo moderner Komfort auf zeitlose Eleganz trifft. Entspannen Sie in stilvollen Zimmern und gemütlichem Ambiente.",
          imageSrc: "/images/About/hotel_outside.webp",
          imageAlternativeText: "Picture of Hotel",
          primaryButtonRoute: "about"
        },
        {
          title: "Unsere Zimmer",
          cardText: "Unsere Zimmer im Boutique-Hotel Technikum bieten stilvolles Design, modernen Komfort und gemütliche Atmosphäre für einen unvergesslichen Aufenthalt.",
          imageSrc: "/images/Rooms/2.jpg",
          imageAlternativeText: "Picture of a Room",
          primaryButtonRoute: "rooms"
        },
        {
          title: "So finden Sie uns",
          cardText: "Die Anreise zum Boutique-Hotel Technikum ist einfach. Genießen Sie eine zentrale Lage mit hervorragenden Verkehrsanbindungen für eine stressfreie Ankunft",
          imageSrc: "/images/GettingThere/location_stock_photo.jpg",
          imageAlternativeText: "Picture of the Way",
          primaryButtonRoute: "getting-here"
        }
      ]
    }
  }
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="12" lg="8">
        <heading-landingpage></heading-landingpage>
        <b-card-group deck>
          <cards
              primary-button-text="Mehr erfahren"
              v-for="(content, index) in contents"
              :card-text="content.cardText"
              :image-alternative-text="content.imageAlternativeText"
              :image-src="content.imageSrc"
              :index="index"
              :primary-button-route="content.primaryButtonRoute"
              :title="content.title">
          </cards>
        </b-card-group>
      </b-col>

    </b-row>
  </b-container>
</template>

<style scoped>

</style>