<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <div class="impressum-container">
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>
            Technikum Hotel <br />
            Mariahilfer Straße 123 <br />
            1060 Wien, Österreich
          </p>
          <p>
            Vertreten durch: <br />
            Franz Müller
          </p>
          <p>
            Kontakt: <br />
            Telefon: +43 1 234 567 890 <br />
            E-Mail: kontakt@technikumhotel.at
          </p>
          <p>
            Registereintrag: <br />
            Eintragung im Handelsregister. <br />
            Registernummer: HRB 987654 <br />
            Registergericht: Handelsgericht Wien
          </p>
          <p>
            Umsatzsteuer-ID: <br />
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: ATU12345678
          </p>
          <p>
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: <br />
            Franz Müller <br />
            Mariahilfer Straße 123 <br />
            1060 Wien, Österreich
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AppImpressum',
};
</script>

<style scoped>
.impressum-container {
  padding: 20px;
  font-size: 18px;
}
</style>
