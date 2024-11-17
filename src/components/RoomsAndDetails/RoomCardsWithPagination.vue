<script>
import HeadingRoomsSummary from "@/components/RoomsAndDetails/HeadingRoomsSummary.vue";
import {BCardGroup} from "bootstrap-vue-3";
import RoomCard from "@/components/RoomsAndDetails/RoomCard.vue";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "RoomCards",
  components: {RoomCard, BCardGroup},

  data() {
    return {
      pictures: [
        {"source": "/images/Rooms/1.jpg"},
        {"source": "/images/Rooms/2.jpg"},
        {"source": "/images/Rooms/3.jpg"},
        {"source": "/images/Rooms/4.jpg"},
        {"source": "/images/Rooms/5.jpg"},
        {"source": "/images/Rooms/6.jpg"},
        {"source": "/images/Rooms/7.jpg"},
        {"source": "/images/Rooms/8.jpg"},
        {"source": "/images/Rooms/9.jpg"},
        {"source": "/images/Rooms/10.jpg"}
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },

  computed: {
    rooms() {
      return useRoomsStore().rooms;
    },
    paginatedRooms() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.rooms.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },

  methods: {
    useRoomsStore,
    getImageSource(roomId) {
      return this.pictures[roomId - 1].source;
    },
    handlePageChange(page) {
      this.currentPage = page;
    }
  },
  async created() {
    await useRoomsStore().checkRooms();
  }
};
</script>

<template>
        <b-card-group deck>
          <RoomCard
              v-for="room in paginatedRooms"
              :key="room.id"
              :room-id="room.id"
              :roomName="room.roomsName"
              :beds="room.beds"
              :pricePerNight="room.pricePerNight"
              :extras="room.extras"
              :imageSrc="getImageSource(room.id)"
              imageAlternativeText="Room image"
              primaryButtonRoute="/room-detail"
              primaryButtonText="Mehr erfahren"
              secondary-button-text="Verfügbarkeit"
              secondaryButtonRoute=""
          />
        </b-card-group>
        <div class="d-flex justify-content-center my-4">
          <b-pagination
              v-model="currentPage"
              :total-rows="useRoomsStore().rooms.length"
              :per-page="itemsPerPage"
              @change="handlePageChange"
          />
        </div>
</template>
<style scoped>

.room-card {
  width: 650px;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card-deck > .room-card {
  flex: 0 1 auto;
}

.b-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
