<script>
import CollapseAvailability from "@/components/CollapseAvailability.vue";
import RoomDetailsBasicInfo from "@/components/RoomDetailsBasicInfo.vue";
import RoomExtras from "@/components/RoomExtras.vue";

export default {
  name: "RoomDetailAndAvailabilityView",
  components: {RoomExtras, RoomDetailsBasicInfo, CollapseAvailability}
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
  <RoomDetailsBasicInfo/>
  <CollapseAvailability/>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>