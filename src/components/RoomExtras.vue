<script>
export default {
  name: "RoomExtras",


  props: {
    icon: String,
    name: String,
  }
}


</script>

<template>
  <img :src="icon" height="20" width="20" alt="dekorativer Icon"/> {{ name }}<br>
</template>

<style scoped>

</style>

