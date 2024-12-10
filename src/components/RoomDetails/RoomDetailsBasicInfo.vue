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
    let roomid = parseInt(this.$route.params.roomId, 10);
    this.roomData.setRoomId(roomid);
  }
};
</script>
<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="10" lg="8">
        <h1>{{ roomData.roomName }}</h1><br><br>
        <b-container class="image-container">
          <b-img :src="imageUrl" alt="Zimmerbild" class="room-img"></b-img>
        </b-container>

        <div class="room-info">
          <div class="bed-info">
            <span v-for="index in selectedRoom.beds" :key="index">
              <img class="bed-icon" src='/images/Icons/beds.svg' height="20" width="20"
                   alt="dekorativer Icon">
            </span>
            <span>{{ selectedRoom.beds }} Betten</span>
          </div>
          <p class="price">Preis: €{{ selectedRoom.pricePerNight }} pro Nacht</p>
        </div>
        <br>

        <RoomDescription :id="selectedRoom.id"/>
        <br>

        <h5 class="extras">Extras: </h5>
        <RoomExtras/>
        <br>
      </b-col>
    </b-row>
  </b-container>
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

