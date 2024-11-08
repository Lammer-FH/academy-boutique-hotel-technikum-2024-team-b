<script>

export default {
  name: "CollapseAvailability",


  data() {
    return {
      selected_date: '',
      context: null,
      isCollapsed: false,
      arrival_date: '',
      departure_date: '',
    }
  },
  methods: {
    changeVisibilityCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  }
}
</script>

<template>
  <div>
    <div>
      <b-container fluid class="text-center">
        <b-row class="justify-content-center">
          <b-col sm="12" md="8" lg="6">
            <b-button @click="changeVisibilityCollapse" variant="primary">Verfügbarkeit prüfen</b-button>
        <b-collapse class="mx-5" v-model="isCollapsed">
          <b-card class="mx-5">
           Bitte wählen Sie ein Datum aus:<br>
            <p>Anreise: <input type="date" v-model="arrival_date" />
            Abreise: <input type="date" v-model="departure_date" />
            </p>

          </b-card>
        </b-collapse>
          </b-col>
        </b-row>
      </b-container>
      </div>
    </div>


</template>

<style scoped>

</style>