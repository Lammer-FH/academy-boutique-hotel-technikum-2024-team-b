<script>
export default {
  name: "RoomExtrasItem",


  props: {
    icon: String,
    name: String,
  }
}

</script>

<template>
  <div class="extras">
    <img :src="icon" height="20" width="20" alt="Icon für Extra"/>
    {{ name }}</div>
</template>

<style scoped>
.extras {
  display: flex;
  align-items: center;
  text-align: left;
 }

.extras img {
  margin-right: 8px;
}
</style>

