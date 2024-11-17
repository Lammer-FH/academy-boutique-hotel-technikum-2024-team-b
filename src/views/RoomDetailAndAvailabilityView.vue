<script>
import CollapseAvailability from "@/components/AvailabilityAndConformation/CollapseAvailability.vue";
import RoomDetailsBasicInfo from "@/components/RoomsAndDetails/RoomDetailsBasicInfo.vue";
import RoomExtraItem from "@/components/RoomsAndDetails/RoomExtrasItem.vue";
import {useRoomsStore} from "@/stores/RoomsStore";
import {BContainer} from "bootstrap-vue-3";

export default {
  name: "RoomDetailAndAvailabilityView",
  components: {BContainer, RoomExtraItem, RoomDetailsBasicInfo, CollapseAvailability},

  async created() {
    await useRoomsStore().checkRooms();  // Make sure checkRooms is called here to populate rooms
  }
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