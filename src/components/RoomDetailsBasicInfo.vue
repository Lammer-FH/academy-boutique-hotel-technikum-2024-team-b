<script>
import { useRoomsStore } from "@/stores/RoomsStore";
import RoomDescription from "@/components/RoomDescription.vue";
import RoomExtras from "@/components/RoomExtras/RoomExtras.vue";

export default {
  name: "RoomDetailsBasicInfo",
  components: { RoomExtras, RoomDescription },


  computed: {
    // Access roomId from store
    roomId() {
      return useRoomsStore().roomId;
    },

    // Use the getter to fetch the room by its ID
    selectedRoom() {
      return useRoomsStore().getRoomById(this.roomId);
    },

    imageUrl() {
      return this.selectedRoom ? `/images/Rooms/${this.selectedRoom.id}.jpg` : '';
    },
  },
};
</script>

<template>
  <div v-if="selectedRoom">
    <h1>{{ selectedRoom.roomsName }}</h1><br><br>
    <figure class="mb-5">
      <b-img :src="imageUrl" alt="Zimmerbild" fluid-grow class="mb-2"></b-img>
      <br />
      <figcaption>
        <span v-for="index in selectedRoom.beds" :key="index">
          <img class="left" src="/images/Icons/beds.svg" height="20" width="20" alt="decorative icon" />
        </span>
        <span class="right">{{ selectedRoom.beds }} Betten</span>
      </figcaption>
    </figure>

    <!-- Pass the room ID to RoomDescription -->
    <RoomDescription :id="selectedRoom.id" />
    <h5 class="extras">Extras: </h5>

    <!-- Pass the room extras to RoomExtras -->
    <RoomExtras :extras="selectedRoom.extras" />
    <br />

    <p class="price">Euro: {{ selectedRoom.pricePerNight }} pro Nacht</p>
  </div>

  <div v-else>
    <p>Room details not found or room is not selected.</p>
  </div>
</template>

<style scoped>
.price {
  text-align: right;
  font-weight: bold;
}

.left {
  text-align: left;
}
</style>
