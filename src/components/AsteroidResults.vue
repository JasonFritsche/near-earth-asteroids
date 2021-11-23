<template>
  <div class="asteroid-results-container">
    <div class="asteroids-list">
      <v-select :items="Object.keys(nearEarthObjects)" label="Standard" @change="onSelectChange($event)"></v-select>
    </div>
    <div class="asteroids-list">
      <v-card class="mx-auto" max-width="200" tile>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, index) in objectsByDate" :key="index">
            <div @click="displayDetails(item)">
              {{ item.name }}
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
    <div class="asteroids-details">
      <v-simple-table dense v-if="selectedAsteroidData">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Asteroid ID</th>
              <th class="text-left">Estimated Diameter (Kilometers)</th>
              <th class="text-left">Potentially Dangerous?</th>
              <th class="text-left">Close Approach Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ selectedAsteroidData.id }}</td>
              <td>
                <div>
                  Estimated Min:
                  {{ selectedAsteroidData.estimated_diameter.kilometers.estimated_diameter_min }}
                </div>
                <div>
                  Estimated Max:
                  {{ selectedAsteroidData.estimated_diameter.kilometers.estimated_diameter_max }}
                </div>
              </td>
              <td>
                {{ selectedAsteroidData.is_potentially_hazardous_asteroid }}
              </td>
              <td>
                {{ selectedAsteroidData.close_approach_data[0].close_approach_date }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["asteroidData"],
  data: () => ({
    nearEarthObjects: null,
    selectedAsteroidData: null,
    objectsByDate: null,
  }),
  mounted() {
    this.parseAsteroidData();
  },
  watch: {
    asteroidData() {
      this.parseAsteroidData();
    },
  },
  methods: {
    parseAsteroidData() {
      this.nearEarthObjects = this.asteroidData.near_earth_objects;
    },
    displayDetails(selectedAsteroidData) {
      this.selectedAsteroidData = selectedAsteroidData;
    },
    onSelectChange(event) {
      this.objectsByDate = this.nearEarthObjects[event];
    },
  },
};
</script>

<style>
li {
  list-style-type: none;
}

.asteroid-anchor {
  color: #333;
}
.asteroid-anchor:hover {
  color: purple;
  cursor: pointer;
}
.v-expansion-panel {
  max-width: 500px;
}
.asteroid-results-container {
  width: 100%;
}
</style>
