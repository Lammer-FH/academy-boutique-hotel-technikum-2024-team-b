<script>
export default {
  name: "Stepper",

  props: {
    currentStep: Number
  },

  data() {
    return {
      steps: ["Buchen", "Bestätigen", "Abgeschlossen"],
      stepContents: [
        "Schritt 1: Buchungsinformationen eingeben.",
        "Schritt 2: Buchung bestätigen.",
        "Schritt 3: Buchung erfolgreich abgeschlossen!"
      ]
    };
  },
};
</script>


<template>
  <div>
    <div class="stepper">
      <div
          v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ active: currentStep === index }"
      >
      {{ step }}
    </div>
  </div>
</div>
</template>


<style scoped>
.stepper {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.step {
  flex: 1;
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  position: relative;
}

.step.active {
  font-weight: bold;
  color: #181818;
  border-color: #181818;
}
</style>