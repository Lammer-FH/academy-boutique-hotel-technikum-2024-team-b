<script>
import {BButton, BCard, BCardText} from "bootstrap-vue-3";
import {useRoomsStore} from "@/stores/RoomsStore";
import router from "@/router";
import Beds from "@/components/Icons/Beds.vue";
import Handicapped from "@/components/Icons/Handicapped.vue";
import {useCollapseStore} from "@/stores/CollapseStore";

export default {
  name: "RoomCard",
  components: {Handicapped, Beds, BButton, BCard, BCardText},
  props: {
    roomName: {type: String, required: true},
    roomId: {type: Number, required: true},
    beds: {type: Number, required: true},
    pricePerNight: {type: Number, required: true},
    extras: {type: Object, required: false},
    imageSrc: {type: String, required: true},
    imageAlternativeText: {type: String, required: true},
    description: {type: String, required: false},
    primaryButtonRoute: {type: String, required: false},
    primaryButtonText: {type: String, required: true},
    secondaryButtonRoute: {type: String, required: false},
    secondaryButtonText: {type: String, required: true}
  },

  data() {
    return {
      roomsData: useRoomsStore(),
      roomDetailView: useCollapseStore(),
    }
  },
  methods: {
    hasHandicappedAccess(extras) {
      return extras.some(extra => extra['handicapped accessible'] === 1);
    },
    handlePrimaryButtonClick() {
      this.roomsData.setRoomIdAndNameAndPrice(this.roomId, this.roomName, this.pricePerNight);
      this.roomDetailView.setCollapseFalse();
      router.push({
        name: 'roomDetail',
        params: {roomId: this.roomId}
      });
    },
    handleSecondaryButtonClick() {
      this.roomsData.setRoomIdAndNameAndPrice(this.roomId, this.roomName, this.pricePerNight);
      this.roomDetailView.setCollapseTrue();
      router.push({
        name: 'roomDetail',
        params: {roomId: this.roomId, scrollTo: 'availability'}
      });
    }
  }
}


</script>

<template>
  <b-card
      :title="roomName"
      :room-id="roomId"
      tag="article"
      class="room-card mb-5"
  >
    <b-container class="image-container">
    <b-img
        :src="imageSrc"
        :alt="imageAlternativeText"
        class="card-img"
    />
    </b-container>
    <div class="roomExtras">
      <div class="justify-content-around">
        <span v-for="index in beds" class="bed-icon"><Beds/></span>
      </div>
      <span v-if="hasHandicappedAccess(extras)"><Handicapped/></span>
      <span id="price"> Preis: €{{ pricePerNight }} pro Nacht</span>
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
.image-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 2vh;
  margin-top: 2vh;
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bed-icon {
  margin-right: 5px;
}

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