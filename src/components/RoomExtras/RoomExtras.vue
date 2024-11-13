<script>
import RoomExtrasItem from "@/components/RoomExtras/RoomExtrasItem.vue";

export default {
  name: "RoomExtras",
  components: {RoomExtrasItem},

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
          "minibar": 0
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
  <RoomExtrasItem
      v-for="extra in availableExtras"
      :name="extraName(extra)" :icon="iconUrl(extra)"
  />
</template>

<style scoped>

</style>