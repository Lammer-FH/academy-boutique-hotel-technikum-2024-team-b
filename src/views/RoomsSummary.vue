<script>
import HeadingRoomsSummary from "@/components/HeadingRoomsSummary.vue";
import Cards from "@/components/Cards.vue";
import CardIconsSection from "@/components/CardIconsSection.vue";

export default {
  name: "RoomsSummary",
  components: {CardIconsSection, Cards, HeadingRoomsSummary,},
  data() {
    return {
      pictures: [
        {
          "source": "/images/Rooms/1.jpeg",
          "alternativeText": "foto of a Room"
        },
        {
          "source": "/images/Rooms/2.jpeg",
          "alternativeText": "foto of a Room"
        },
        {
          "source": "/images/Rooms/3.jpeg",
          "alternativeText": "foto of a Room"
        },
        {
          "source": "/images/Rooms/4.jpeg",
          "alternativeText": "foto of a Room"
        },
        {
          "source": "/images/Rooms/5.jpeg",
          "alternativeText": "foto of a Room"
        },
        {
          "source": "/images/Rooms/6.jpeg",
          "alternativeText": "foto of a Room"
        }
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
      ]
    }
  }
}
</script>

<template>
  <HeadingRoomsSummary></HeadingRoomsSummary>
  <Cards
  :title="rooms.roomsName"
  :primary-button-text="Verfügbarkeit prüfen"
  :primary-button-route="rooms.id"
  :image-alternative-text="pictures.imageAlternativeText"
  :image-src="pictures.path"
  >
</Cards>
</template>

<style scoped>
.b-card-subtitle {
  justify-content: space-evenly;
}
</style>