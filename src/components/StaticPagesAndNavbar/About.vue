<script>

import {BContainer} from "bootstrap-vue-3";

export default {
  name: "About",
  components: {BContainer}
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <h1>Boutique-Hotel Technikum</h1><br><br>

        <div id="carouselAbout" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/About/hotel_lobby.webp" class="d-block w-100" alt="Hotel Lobby">
            </div>
            <div class="carousel-item">
              <img src="/images/About/hotel_outside_carousel.jpg" class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselAbout" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselAbout" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div><br><br>

        <p>Willkommen im <b>Boutique-Hotel Technikum</b>, Ihrem urbanen Rückzugsort im Herzen von Wien!
          Unser charmantes Hotel vereint zeitlose Eleganz mit modernem Komfort und bietet eine einzigartige
          Atmosphäre,
          in
          der Sie sich sofort wohlfühlen werden.</p>
        <p>Unser Haus befindet sich in bester innerstädtischer Lage, ideal für Gäste, die das historische und
          kulturelle
          Wien erkunden möchten.
          Ob es die Pracht der Ringstraße, der Stephansdom oder die zahlreichen Museen sind – von unserem Hotel aus
          ist
          alles bequem zu Fuß oder mit den öffentlichen Verkehrsmitteln erreichbar.</p>
        <p>Das <b>Technikum</b> ist mehr als nur ein Ort zum Übernachten. Unser Name steht für das Zusammenspiel von
          Tradition und
          Innovation:
          Historische Architektur trifft auf zeitgenössisches Design. Wir legen großen Wert auf eine persönliche und
          herzliche Betreuung unserer Gäste.
          Jedes Zimmer ist individuell gestaltet und vereint modernen Komfort mit Wiener Charme, damit Sie sich wie zu
          Hause
          fühlen</p>
        <p>Unser Ziel ist es, Ihren Aufenthalt so angenehm und unvergesslich wie möglich zu gestalten –
          egal ob Sie geschäftlich oder privat in Wien sind. Lassen Sie sich von der lebendigen Atmosphäre und der
          Gastfreundschaft unseres Boutique-Hotels begeistern.</p>
        <p>Haben Sie noch Fragen? Dann kontaktieren Sie uns unter kontakt@technikumhotel.at.</p>
        <p>Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen!</p><br>
        <p>Ihr Team vom Boutique-Hotel Technikum</p>

      </b-col>
    </b-row>
  </b-container>


</template>

<style scoped>

</style>
