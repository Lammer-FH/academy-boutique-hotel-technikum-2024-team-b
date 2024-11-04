<script>

export default {
  name: "CollapseAvailability",


  data() {
    return {
      selected_date: '',
      context: null,
      isCollapsed: false
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
      <div class="mb-3">
        <b-button @click="changeVisibilityCollapse" class="m-1">Verfügbarkeit</b-button>
        <b-collapse v-model="isCollapsed">
          <b-card>Bitte wählen Sie ein Datum aus.

          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>