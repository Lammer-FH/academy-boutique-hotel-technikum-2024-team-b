<script>
import {BButton, BCard, BCardText} from "bootstrap-vue-3";
import {useRoomsStore} from "@/stores/RoomsStore";
import router from "@/router";

export default {
  name: "RoomCard",
  components: {BButton, BCard, BCardText},
  props: {
    roomName: {type: String, required: true},
    roomId: {type: Number, required: true},
    beds: {type: Number, required: true},
    pricePerNight: {type: Number, required: true},
    extras: {type: Object, required: false},
    imageSrc: {type: String, required: true},
    imageAlternativeText: {type: String, required: true},
    description: {type: String, required: false},
    primaryButtonRoute: {type: String, required: true},
    primaryButtonText: {type: String, required: true},
    secondaryButtonRoute: {type: String, required: true},
    secondaryButtonText: {type: String, required: true}
  },

  data() {
    return {
      roomsData: useRoomsStore()
    }
  },
  methods: {
    handlePrimaryButtonClick() {
      this.roomsData.setRoomIdAndNameAndPrice(this.roomId, this.roomName, this.roomsData.roomPricePerNight);
      router.push({
        name: 'roomDetail',
        params: {roomId: this.roomId}
      });
    },
    handleSecondaryButtonClick() {
      this.roomsData.setRoomIdAndNameAndPrice(this.roomId, this.roomName, this.roomsData.roomPricePerNight);
      router.push({
        name: 'roomDetail',
        params: { roomId: this.roomId, scrollTo: 'availability' }
      });

    }
  }
}


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
        <span v-for="index in beds">Bed</span>
      </div>
      <span v-if="extras && extras['handicapped accessible']" class="accessible">Wheelchair</span>
      <span id="price"> Price: ${{ pricePerNight }}</span>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-evenly gap-2">
      <b-button @click="handlePrimaryButtonClick" variant="primary">
        {{ primaryButtonText }}
      </b-button>
      <b-button @click="handleSecondaryButtonClick" variant="secondary">
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

@media (max-width: 576px) {
  .room-card {
    padding: 1rem;
  }

  .roomExtras {
    flex-direction: column;
    align-items: flex-start;
  }

  #price {
    margin-top: 0.5rem;
  }
}
</style>