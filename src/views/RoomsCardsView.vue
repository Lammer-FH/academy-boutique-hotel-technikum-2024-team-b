<script>
import HeadingRoomsSummary from "@/components/Rooms/HeadingRoomsSummary.vue";
import {BCardGroup} from "bootstrap-vue-3";
import RoomCard from "@/components/Rooms/RoomCard.vue";
import {useRoomsStore} from "@/stores/RoomsStore";
import RoomCards from "@/components/Rooms/RoomCardsWithPagination.vue";
import Error from "@/components/Statics/ErrorGet.vue";

export default {
  name: "RoomsSummary",
  components: {Error, RoomCards, RoomCard, BCardGroup, HeadingRoomsSummary},
  data() {
    return {
      roomData: useRoomsStore()
    }
  },
}
</script>


<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center p-2">
      <b-col sm="12" md="12" lg="8">
        <HeadingRoomsSummary/>
        <RoomCards v-if="roomData.isLoaded"></RoomCards>
        <Error v-if="roomData.isLoaded === false"></Error>
      </b-col>
    </b-row>
  </b-container>
</template>
<style scoped>
</style>
