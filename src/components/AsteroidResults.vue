<template>
  <div class="asteroid-results-container">
    <v-card class="mx-auto" max-width="400" tile>
      <v-list-item
        two-line
        v-for="(item, date) in nearEarthObjects"
        :key="date"
      >
        <v-list-item-content>
          <v-list-item-title>{{ date }}</v-list-item-title>
          <v-list-item-subtitle v-for="(asteroidItem, i) in item" :key="i">{{
            asteroidItem.name
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["asteroidData"],
  data: () => ({
    nearEarthObjects: null,
  }),
  mounted() {
    this.parseAsteroidData();
  },
  methods: {
    parseAsteroidData() {
      console.log(this.asteroidData);
      this.nearEarthObjects = this.asteroidData.near_earth_objects;
    },
    getDate(obj) {
      console.log(obj);
    },
  },
};
</script>

<style>
.v-expansion-panel {
  max-width: 500px;
}
</style>
