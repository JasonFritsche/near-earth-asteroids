<template>
  <v-container>
    <v-row> Near Earth Asteroids </v-row>
    <v-row>
      <AsteroidSearchForm @search="search($event)" />
    </v-row>
    <v-row v-if="asteroidData">
      <AsteroidResults :asteroidData="asteroidData" />
    </v-row>
  </v-container>
</template>

<script>
import AsteroidSearchForm from "./AsteroidSearchForm.vue";
import AsteroidResults from "./AsteroidResults.vue";
import { getAsteroids } from "../services/Neows.service";
export default {
  name: "Home",
  components: {
    AsteroidSearchForm,
    AsteroidResults,
  },
  data: () => ({
    asteroidData: null,
  }),
  methods: {
    search: function (searchEvent) {
      const { fromDate, toDate } = searchEvent;
      // pass in fromDate and toDate to api call
      getAsteroids(fromDate, toDate).then((res) => (this.asteroidData = res));
    },
  },
};
</script>
