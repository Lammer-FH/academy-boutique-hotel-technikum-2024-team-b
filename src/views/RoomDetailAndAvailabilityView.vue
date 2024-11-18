<script>
import CollapseAvailability from "@/components/AvailabilityAndConformation/CollapseAvailability.vue";
import RoomDetailsBasicInfo from "@/components/RoomsAndDetails/RoomDetailsBasicInfo.vue";
import RoomExtraItem from "@/components/RoomsAndDetails/RoomExtrasItem.vue";
import {useRoomsStore} from "@/stores/RoomsStore";
import {BContainer} from "bootstrap-vue-3";
import Error from "@/components/StaticPagesAndNavbar/ErrorGet.vue";

export default {
  name: "RoomDetailAndAvailabilityView",
  components: {Error, BContainer, RoomExtraItem, RoomDetailsBasicInfo, CollapseAvailability},

  data() {
    return {
      roomData: useRoomsStore()
    }
  }
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center">
      <b-col sm="12" md="8" lg="6">
        <RoomDetailsBasicInfo/>
        <CollapseAvailability/>
        <Error v-if="roomData.isLoaded === false"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>

</style>