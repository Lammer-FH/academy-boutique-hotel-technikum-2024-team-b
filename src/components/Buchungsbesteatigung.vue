<template>
  <div>
    <h1>Buchungsbestätigung</h1>

    <!-- Display the dummy text with room and user data -->
    <div class="booking-details">
      <p>Zimmer: {{ roomName }}</p>
      <p>Zeitraum: {{ period }}</p>
      <p>{{ breakfastIncluded ? 'Frühstück inklusive' : 'Frühstück nicht inklusive' }}</p>
      <p>Preis gesamt: €660</p>

      <p>Vorname: {{ firstName }}</p>
      <p>Nachname: {{ lastName }}</p>
      <p>Geburtsdatum: {{ birthDate }}</p>
      <p>E-Mail: {{ email }}</p>
    </div>

    <!-- Buttons: Bearbeiten and Buchen -->
    <div class="button-container">
      <button @click="editBooking" class="edit-button">Bearbeiten</button>
      <button @click="confirmBooking" class="book-button">Buchen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buchungsbestätigung",
  props: {
    roomName: String,
    period: String,
    breakfastIncluded: Boolean,
    firstName: String,
    lastName: String,
    birthDate: String,
    email: String,
  },
  methods: {
    editBooking() {
      this.$emit("editBooking"); // Emit event to navigate back to edit form
    },
    confirmBooking() {
      alert("Buchung erfolgreich abgeschlossen!"); // Placeholder for booking confirmation
    }
  }
};
</script>

<style scoped>
.booking-details {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-button {
  align-self: flex-start;
}

.book-button {
  width: 100%;
}
</style>
