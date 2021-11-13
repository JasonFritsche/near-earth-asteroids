<template>
  <v-container>
    <v-row> Near Earth Asteroids </v-row>
    <v-row><AsteroidSearchForm /></v-row>
  </v-container>
</template>

<script>
import AsteroidSearchForm from "./AsteroidSearchForm.vue";
export default {
  name: "Home",
  components: {
    AsteroidSearchForm,
  },
  data: () => ({}),
};
</script>
