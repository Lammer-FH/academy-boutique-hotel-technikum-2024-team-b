<script>

import RoomDescription from "@/components/RoomDescription.vue";
import RoomExtras from "@/components/RoomExtras/RoomExtras.vue";

export default {
  name: "RoomDetailsBasicInfo",
  components: {RoomExtras, RoomDescription},

  props: {},

  data() {
    return {

      id: 3,
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
      ]
    }
  },
  computed: {
    imageUrl() {
      return `/images/Rooms/${this.id}.jpg`;
    },
  },
}

</script>

<template>

  <h1>{{ roomName }}</h1><br><br>
  <b-img :src="imageUrl" alt="Zimmerbild" fluid-grow class="mb-2"></b-img>

  <div class="room-info">
    <div class="bed-info">
      <span v-for="index in beds" :key="index">
    <img class="bed-icon" src='/images/Icons/beds.svg' height="20" width="20"
         alt="dekorativer Icon"></span><span>{{ beds }} Betten</span>
    </div>
    <p class="price">Preis p.N.: €{{ pricePerNight }}</p>
  </div>
  <br>

  <RoomDescription :id="id"/>
  <br>

  <h5 class="extras">Extras: </h5>
  <RoomExtras/><br>
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