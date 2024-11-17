<script>
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "Impressum",
  components: {BContainer}
}
</script>

<template>
  <b-container fluid class="text-center py-5">
    <b-row class="justify-content-center">
      <b-col sm="12" md="10" lg="8">
        <div class="impressum-container border rounded p-4 shadow">
          <h1 class="display-4 mb-4">Impressum</h1>
          <p class="lead">Angaben gemäß § 5 TMG:</p>
          <p class="mb-2">
            <strong>Technikum Hotel</strong><br />
            Mariahilfer Straße 123<br />
            1060 Wien, Österreich
          </p>
          <p class="mb-2">
            <strong>Vertreten durch:</strong><br />
            Franz Müller
          </p>
          <p class="mb-2">
            <strong>Kontakt:</strong><br />
            Telefon: <a href="tel:+431234567890">+43 1 234 567 890</a><br />
            E-Mail: <a href="mailto:kontakt@technikumhotel.at">kontakt@technikumhotel.at</a>
          </p>
          <p class="mb-2">
            <strong>Registereintrag:</strong><br />
            Eintragung im Handelsregister.<br />
            Registernummer: HRB 987654<br />
            Registergericht: Handelsgericht Wien
          </p>
          <p class="mb-2">
            <strong>Umsatzsteuer-ID:</strong><br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: ATU12345678
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
            Franz Müller<br />
            Mariahilfer Straße 123<br />
            1060 Wien, Österreich
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>