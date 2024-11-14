<script>
import {BButton, BCard, BCardText} from "bootstrap-vue-3";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "RoomCard",
  components: {BButton, BCard, BCardText},
  props: {
    roomId: {type: Number, required: true},
    roomName: {type: String, required: true},
    beds: {type: Number, required: true},
    pricePerNight: {type: Number, required: true},
    extras: {type: Object, required: false},
    imageSrc: {type: String, required: true},
    imageAlternativeText: {type: String, required: true},
    description: {type: String, required: false},
    primaryButtonText: {type: String, required: true},
    secondaryButtonText: {type: String, required: true}
  },
  methods: {
    selectRoom() {
      useRoomsStore().setSelectedRoomId(this.roomId);  // Save the roomId to the store
    }
  }
};
</script>

<template>
  <b-card
      :title="roomName"
      :img-src="imageSrc"
      :img-alt="imageAlternativeText"
      :room-id="roomId"
      tag="article"
      class="room-card mb-5"
  >
    <div class="roomExtras">
      <div class="justify-content-around">
        <span v-for="index in beds" :key="index">Bed</span>
      </div>
      <span v-if="extras && extras['handicapped accessible']" class="accessible">Wheelchair</span>
      <span id="price"> Price: ${{ pricePerNight }}</span>
    </div>
    <div class="d-flex justify-content-evenly">
      <b-button @click="selectRoom" to="roomDetails" variant="primary">
        {{ primaryButtonText }}
      </b-button>
      <b-button variant="secondary">
        {{ secondaryButtonText }}
      </b-button>
    </div>
  </b-card>
</template>

<style scoped>
.roomExtras {
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

#price {
  font-weight: bold;
}
</style>
