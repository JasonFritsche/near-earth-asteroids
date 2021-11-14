<template>
  <div class="asteroid-results-container">
    <div class="asteroids-list">
      <v-card class="mx-auto" max-width="200" tile>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item, date) in nearEarthObjects"
            :key="date"
          >
            <v-expansion-panel-header>
              {{ date }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul v-for="(asteroidItem, i) in item" :key="i">
                <li @click="displayDetails(asteroidItem)">
                  <div class="asteroid-anchor">{{ asteroidItem.name }}</div>
                </li>
              </ul>
            </v-expansion-panel-content>
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
                  {{
                    selectedAsteroidData.estimated_diameter.kilometers
                      .estimated_diameter_min
                  }}
                </div>
                <div>
                  Estimated Max:
                  {{
                    selectedAsteroidData.estimated_diameter.kilometers
                      .estimated_diameter_max
                  }}
                </div>
              </td>
              <td>
                {{ selectedAsteroidData.is_potentially_hazardous_asteroid }}
              </td>
              <td>
                {{
                  selectedAsteroidData.close_approach_data[0]
                    .close_approach_date
                }}
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
  display: grid;
  grid-template-columns: 1fr 2fr;
}
</style>
