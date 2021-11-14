<template>
  <v-container>
    <v-row align="center" justify="center">
      <h1>Near Earth Asteroids</h1>
    </v-row>
    <v-row align="center" justify="center" class="pa-6">
      <AsteroidSearchForm @search="search($event)" :isLoading="isLoading" />
    </v-row>
    <v-row align="center" justify="center">
      <p>
        Search for near earth asteroids. Search dates must be within 7 days of
        each other.
      </p>
    </v-row>
    <v-row v-if="asteroidData" align="center" justify="center">
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
    isLoading: false,
  }),
  methods: {
    search: function (searchEvent) {
      const { fromDate, toDate } = searchEvent;
      this.isLoading = true;
      // pass in fromDate and toDate to api call
      getAsteroids(fromDate, toDate).then((res) => {
        this.asteroidData = res;
        this.isLoading = false;
      });
    },
  },
};
</script>
