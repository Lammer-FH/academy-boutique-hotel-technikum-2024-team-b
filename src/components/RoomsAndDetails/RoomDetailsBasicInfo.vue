<script>
import RoomDescription from "@/components/RoomsAndDetails/RoomDescription.vue";
import RoomExtras from "@/components/RoomsAndDetails/RoomExtras.vue";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "RoomDetailsBasicInfo",
  components: {RoomExtras, RoomDescription},

  data() {
    return {
      roomData: useRoomsStore(),
    };
  },
  computed: {
    selectedRoom() {
      console.log(this.roomData.roomId)
      console.log(this.selectedRoom);
      return this.roomData.getRoomById();

    },

    imageUrl() {
      return `/images/Rooms/${this.roomData.roomId}.jpg`;
    },
  },
  async mounted() {
    await useRoomsStore().checkRooms();
    parseInt(this.$route.params.roomId, 10);
    this.roomData.setRoomId(this.roomData.roomId);
  }
};
</script>
<template>

  <h1>{{ roomData.roomName }}</h1><br><br>
  <b-img :src="imageUrl" alt="Zimmerbild" fluid-grow class="mb-2"></b-img>

  <div class="room-info">
    <div class="bed-info">
      <span v-for="index in selectedRoom.beds" :key="index">
    <img class="bed-icon" src='/images/Icons/beds.svg' height="20" width="20"
         alt="dekorativer Icon"></span><span>{{ selectedRoom.beds }} Betten</span>
    </div>
    <p class="price">Preis p.N.: €{{ selectedRoom.pricePerNight }}</p>
  </div>
  <br>

  <RoomDescription :id="selectedRoom.id"/>
  <br>

  <h5 class="extras">Extras: </h5>
  <RoomExtras/>
  <br>
</template>

<style scoped>

p {
  margin: 0;
}

.price {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.extras {
  text-align: left;

}

.room-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px
}

.bed-info {
  display: inline-flex;
  align-items: center;

}

.bed-icon {
  margin-right: 5px;
}

</style>

