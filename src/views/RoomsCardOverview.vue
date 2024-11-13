<script>
import HeadingRoomsSummary from "@/components/HeadingRoomsSummary.vue";
import {BCardGroup} from "bootstrap-vue-3";
import RoomCard from "@/components/RoomCard.vue";

export default {
  name: "RoomsSummary",
  components: {RoomCard, BCardGroup, HeadingRoomsSummary,},
  data() {
    return {
      pictures: [
        {
          "source": "/images/Rooms/1.jpeg",
        },
        {
          "source": "/images/Rooms/2.jpeg",
        },
        {
          "source": "/images/Rooms/3.jpeg",
        },
        {
          "source": "/images/Rooms/4.jpeg",
        },
        {
          "source": "/images/Rooms/5.jpg",
        },
        {
          "source": "/images/Rooms/6.jpg",
        },
        {"source": "/images/Rooms/7.jpg",}
      ],

      rooms: [
        {
          "id": 1,
          "roomsNumber": "101",
          "roomsName": "Default Double Bedroom",
          "beds": 2,
          "pricePerNight": 120,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 2,
          "roomsNumber": "102",
          "roomsName": "Default Double Bedroom",
          "beds": 2,
          "pricePerNight": 120,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 3,
          "roomsNumber": "103",
          "roomsName": "Default Single Bedroom",
          "beds": 1,
          "pricePerNight": 120,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 4,
          "roomsNumber": "104",
          "roomsName": "Default Single Bedroom",
          "beds": 1,
          "pricePerNight": 120,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 5,
          "roomsNumber": "201",
          "roomsName": "Junior Suite",
          "beds": 2,
          "pricePerNight": 160,
          "extras": {
            "bathroom": 1,
            "minibar": 0,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 6,
          "roomsNumber": "202",
          "roomsName": "Royal Double Bedroom",
          "beds": 2,
          "pricePerNight": 160,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 0,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        },
        {
          "id": 7,
          "roomsNumber": "203",
          "roomsName": "Family Suite",
          "beds": 4,
          "pricePerNight": 220,
          "extras": {
            "bathroom": 1,
            "minibar": 1,
            "television": 1,
            "livingroom": 1,
            "aircondition": 1,
            "wifi": 1,
            "breakfast": 1,
            "handicapped accessible": 1
          }
        }
      ],
      currentPage: 1,
      itemsPerPage: 3,  // Show 3 cards per page
    };
  },
  computed: {
    paginatedRooms() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.rooms.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },
  methods: {
    getImageSource(roomId) {
      return this.pictures[roomId -1].source;
    },
    handlePageChange(page) {
      this.currentPage = page;
    }
  }
}
</script>

<template>
  <b-container fluid class="text-center">
    <b-row class="justify-content-center p-2">
      <b-col sm="12" md="12" lg="8">
        <HeadingRoomsSummary/>
        <b-card-group deck>
          <RoomCard
              v-for="room in paginatedRooms"
              :key="room.id"
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
              :total-rows="rooms.length"
              :per-page="itemsPerPage"
              @change="handlePageChange"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
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
