<script>

import RoomDescription from "@/components/RoomDescription.vue";
import RoomExtras from "@/components/RoomExtras/RoomExtras.vue";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "RoomDetailsBasicInfo",
  methods: {useRoomsStore},
  components: {RoomExtras, RoomDescription},

  data() {
    return {
      roomData: useRoomsStore(),

    }
  },
  computed: {
    // Use the getter to fetch the room by its ID
    selectedRoom() {
      return this.roomData.getRoomById();
    },

    imageUrl() {
      return `/images/Rooms/${this.roomData.roomId}.jpg`;
    },
  },
}

</script>
<template>

  <h1>{{roomData.roomName}}</h1><br><br>
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
  justify-content: space-between; /* Pushes the price to the right */
  align-items: center;
  height: 40px
  /* Ensures the container stretches across the full width */

}

.bed-info {
  display: inline-flex;
  align-items: center;

}

.bed-icon {
  margin-right: 5px;
}

</style>

/*id: 3,
roomsNumber: "102",
roomName: "Default Double Bedroom",
beds: 2,
pricePerNight: 120,
extras: [
{
"bathroom": 1
},
{
"minibar": 1
},
{
"television": 1
},
{
"livingroom": 1
},
{
"aircondition": 1
},
{
"wifi": 1
},
{
"breakfast": 1
},
{
"handicapped accessible": 1
}
]*/