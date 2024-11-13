<script>
import RoomExtraItem from "@/components/RoomExtraItem.vue";
import RoomDescription from "@/components/RoomDescription.vue";

export default {
  name: "RoomDetailsBasicInfo",
  components: {RoomDescription, RoomExtraItem},

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
    availableExtras() {
      return this.extras.filter(extra => Object.values(extra)[0] === 1);
    },
  },

  methods: {
    extraName(extra) {
      return Object.keys(extra)[0];
    },
    iconUrl(extra) {
      const key = Object.keys(extra)[0].split(" ")[0];
      return `/images/Icons/${key}.svg`;
    },
  }
}

</script>

<template>

  <h1>{{ roomName }}</h1><br><br>
  <figure class="mb-5">
    <b-img :src="imageUrl" alt="Zimmerbild" fluid-grow class="mb-2"></b-img>
    <br>
    <figcaption> <span v-for="index in beds">
    <img class="left" src='/images/Icons/beds.svg' height="20" width="20" alt="dekorativer Icon"></span><span
        class="right">{{ beds }} Betten</span></figcaption>
  </figure>

  <RoomDescription :id="id"/>

  <h5 class="extras">Extras: </h5>

  <RoomExtraItem
      v-for="extra in availableExtras"
      :name="extraName(extra)" :icon="iconUrl(extra)"
  />
  <br>
  <p class="price">Euro: {{ pricePerNight }} pro Nacht</p>

</template>

<style scoped>
.price {
  text-align: right;
  font-weight: bold;
}

.left {
  text-align: left;
}

</style>