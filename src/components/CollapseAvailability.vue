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
      errormessage: '',
      validInput: true
    }
  },
  methods: {
    changeVisibilityCollapse() {
      this.errormessage = '';
      this.arrival_date = '';
      this.departure_date = '';
      this.isCollapsed = !this.isCollapsed;
    },

    validateInput() {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().slice(0, 10);
      this.validInput = true;
      this.errormessage = '';

      if (this.arrival_date < formattedDate) {
        this.validInput = false;
        this.errormessage = "Das Datum kann nicht in der Vergangenheit liegen."
        return false
      }

      if (this.arrival_date === '' || this.departure_date === '') {
        this.validInput = false;
        this.errormessage = "Bitte geben Sie ein Datum ein.";
        return false
      }
      if (this.departure_date <= this.arrival_date) {
        this.validInput = false;
        this.errormessage = "Abreisedatum muss nach dem Anreisedatum liegen!";
        return false
      }
      return true
    },


    checkAvailability() {
      {
        if (this.validateInput()) {
          //ajax-call zum Prüfen
          console.log(this.arrival_date);
        }
      }
    }
  }
}


</script>

<template>
  <div>
    <div>
      <b-container fluid class="text-center">
        <b-row class="justify-content-center">
          <b-col sm="12" md="8" lg="6">
            <b-button @click="changeVisibilityCollapse" class="m-5">Verfügbarkeit prüfen</b-button>
            <b-collapse v-model="isCollapsed">
              <b-card>
                <b>Bitte wählen Sie ein Datum aus:</b><br>
                <p class="error" v-if="!validInput">{{ errormessage }}</p>
                <p>Anreise: <input class="m-2" type="date" v-model="arrival_date"/><br>
                  Abreise: <input class="m-2" type="date" v-model="departure_date"/><br>
                </p>
                <b-button variant="primary" v-on:click="checkAvailability">Verfügbarkeit prüfen</b-button>

              </b-card>
            </b-collapse>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>


</template>


<style scoped>
.error {
  color: red;
}
</style>