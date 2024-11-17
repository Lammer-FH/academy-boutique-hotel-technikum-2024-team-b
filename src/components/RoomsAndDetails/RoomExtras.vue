<script>
import RoomExtrasItem from "@/components/RoomsAndDetails/RoomExtrasItem.vue";
import {useRoomsStore} from "@/stores/RoomsStore";

export default {
  name: "RoomExtras",
  components: {RoomExtrasItem},

  data() {
    return {
      roomData: useRoomsStore()

    }
  },


  computed: {
    selectedRoom() {
      return this.roomData.getRoomById();
    },

    availableExtras() {
      return this.selectedRoom.extras.filter(extra => Object.values(extra)[0] === 1);
    }
  },


  methods: {

    extraName(extra) {
      return Object.keys(extra)[0];
    }
    ,
    iconUrl(extra) {
      const key = Object.keys(extra)[0].split(" ")[0];
      return `/images/Icons/${key}.svg`;
    }
    ,
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