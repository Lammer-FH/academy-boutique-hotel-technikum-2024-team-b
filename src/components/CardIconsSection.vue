<script>
import {BCardSubtitle} from "bootstrap-vue-3";

export default {
  name: "CardIconsSection",
  components: {BCardSubtitle},
  props: {
    icons:{
      type: String,
      required: false
    }
  }
}
</script>

<template>
<b-card-subtitle>
  <b-container fluid>
    <b-row justify="space-evenly">
      {{icons}}
    </b-row>
  </b-container>
</b-card-subtitle>
</template>

<style scoped>

</style>