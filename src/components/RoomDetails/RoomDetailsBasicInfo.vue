<script>
import RoomDescription from "@/components/RoomDetails/RoomDescription.vue";
import RoomExtras from "@/components/RoomDetails/RoomExtras.vue";
import {useRoomsStore} from "@/stores/RoomsStore";
import {BImg} from "bootstrap-vue-3";

export default {
  name: "RoomDetailsBasicInfo",
  components: {BImg, RoomExtras, RoomDescription},

  data() {
    return {
      roomData: useRoomsStore(),
    };
  },
  computed: {
    selectedRoom() {
      return this.roomData.getRoomById();

    },

    imageUrl() {
      return `/images/Rooms/${this.roomData.roomId}.jpg`;
    },
  },
  async beforeMount() {
    //in case of reload in RoomDetails
    if (this.roomData.roomId === null) {
      this.roomData.roomId = parseInt(this.$route.params.roomId, 10);
      this.roomData.setRoomId(this.roomData.roomId)
    }
  }
};
</script>
<template>
  <b-container>
    <b-row>
      <h1 class="mb-5">{{ selectedRoom.roomsName }}</h1><br><br>
      <b-container class="image-container">
        <b-img :src="imageUrl" alt="Zimmerbild" class="room-img"></b-img>
      </b-container>
      <div class="room-info mb-5 d-flex flex-column flex-md-row align-items-start align-items-md-center">
        <div class="bed-info mb-1 mt-1 mb-md-0 mt-md-0">
          <span v-for="index in selectedRoom.beds" :key="index">
            <img
                class="bed-icon"
                src="/images/Icons/beds.svg"
                height="20"
                width="20"
                alt="dekorativer Icon"
            />
          </span>
          <span>{{ selectedRoom.beds }} Betten</span>
        </div>
        <p class="price mb-0">Preis: €{{ selectedRoom.pricePerNight }} pro Nacht</p>
      </div>
      <br>

      <RoomDescription :id="selectedRoom.id"/>
      <br>
      <br>
      <br>

      <h5 class="extras">Extras: </h5>
      <RoomExtras/>


    </b-row>
  </b-container>
  <br><br>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;
}

.room-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

