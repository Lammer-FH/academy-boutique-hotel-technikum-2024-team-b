<script>
import CollapseAvailability from "@/components/CollapseAvailability.vue";
import RoomDetailsBasicInfo from "@/components/RoomDetailsBasicInfo.vue";
import IconTextRoomExtra from "@/components/icons/IconTextRoomExtra.vue";
import ExtraList from "@/components/nicht verwendet/ExtraList.vue";
import RoomExtras from "@/components/RoomExtras.vue";

export default {
  name: "RoomDetailAndAvailabilityView",
  components: {RoomExtras, ExtraList, IconTextRoomExtra, RoomDetailsBasicInfo, CollapseAvailability}
}
</script>

<template>
  <RoomDetailsBasicInfo/>
  <CollapseAvailability/>
</template>

<style scoped>

</style>