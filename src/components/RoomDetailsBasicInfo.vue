<script>
import { useRoomsStore } from "@/stores/RoomsStore";  // Import the store
import RoomDescription from "@/components/RoomDescription.vue";  // Import components
import RoomExtras from "@/components/RoomExtras/RoomExtras.vue";

export default {
  name: "RoomDetailsBasicInfo",
  components: {RoomExtras, RoomDescription},

  computed: {
    roomId() {
      return useRoomsStore().selectRoomId;
    },

    selectedRoom() {
      // Return the selected room by matching the room ID
      const room = useRoomsStore().rooms.find(room => room.id === this.roomId);
      return room || null;  // Ensure we handle null if no room is found
    },

    imageUrl() {
      // Use the roomId to generate the image URL
      return this.roomId ? `/images/Rooms/${this.roomId}.jpg` : '';
    },
  },

  async created() {
    // Fetch the rooms from the store on component creation
    const store = useRoomsStore();
    await store.fetchRooms();
  },
};
</script>

<template>
  <div v-if="selectedRoom">
    <h1>{{ selectedRoom.roomName }}</h1><br><br>
    <figure class="mb-5">
      <b-img :src="imageUrl" alt="Zimmerbild" fluid-grow class="mb-2"></b-img>
      <br/>
      <figcaption>
        <span v-for="index in selectedRoom.beds" :key="index">
          <img class="left" src="/images/Icons/beds.svg" height="20" width="20" alt="dekorativer Icon"/>
        </span>
        <span class="right">{{ selectedRoom.beds }} Betten</span>
      </figcaption>
    </figure>

    <RoomDescription :id="selectedRoom.id"/>
    <h5 class="extras">Extras: </h5>
    <RoomExtras :extras="selectedRoom.extras"/>
    <br/>
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
