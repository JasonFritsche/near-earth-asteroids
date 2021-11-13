<template>
  <v-container>
    <v-row> Near Earth Asteroids </v-row>
    <v-row><AsteroidSearchForm @search="search($event)" /></v-row>
  </v-container>
</template>

<script>
import AsteroidSearchForm from "./AsteroidSearchForm.vue";
import { getAsteroids } from "../services/Neows.service";
export default {
  name: "Home",
  components: {
    AsteroidSearchForm,
  },
  data: () => ({}),
  methods: {
    search: function (searchEvent) {
      console.log(searchEvent);
      const { fromDate, toDate } = searchEvent;
      // pass in fromDate and toDate to api call
      getAsteroids(fromDate, toDate).then((res) => console.log(res));
    },
  },
};
</script>
