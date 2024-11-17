<script>
import HeadingRoomsSummary from "@/components/RoomsAndDetails/HeadingRoomsSummary.vue";
import {BCardGroup} from "bootstrap-vue-3";
import RoomCard from "@/components/RoomsAndDetails/RoomCard.vue";
import {useRoomsStore} from "@/stores/RoomsStore";
import RoomCards from "@/components/RoomsAndDetails/RoomCardsWithPagination.vue";

export default {
  name: "RoomsSummary",
  components: {RoomCards, RoomCard, BCardGroup, HeadingRoomsSummary}
}
</script>


<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center p-2">
      <b-col sm="12" md="12" lg="8">
        <HeadingRoomsSummary/>
        <RoomCards/>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
</style>
