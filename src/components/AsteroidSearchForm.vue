<template>
  <v-form v-model="formValid">
    <v-row>
      <v-col cols="12" md="4">
        <v-menu
          v-model="fromDateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-on="on"
              label="From Date"
              readonly
              :value="fromDateDisplay"
              :rules="dateInputRules"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            :min="minDate"
            :max="maxDate"
            v-model="fromDateVal"
            no-title
            @input="fromDateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" md="4">
        <v-menu
          v-model="toDateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-on="on"
              label="To Date"
              readonly
              :value="toDateDisplay"
              :rules="dateInputRules"
            ></v-text-field>
          </template>
          <v-date-picker
            locale="en-in"
            :min="minDate"
            :max="maxDate"
            v-model="toDateVal"
            no-title
            @input="toDateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col cols="12" md="4">
        <v-btn
          color="primary"
          class="pr-3"
          elevation="4"
          :disabled="!formValid"
          @click="$emit('search', { fromDate: fromDateVal, toDate: toDateVal })"
          >Search</v-btn
        >
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          color="purple"
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  props: ["isLoading"],
  data: () => ({
    fromDateMenu: false,
    fromDateVal: null,
    toDateMenu: false,
    toDateVal: null,

    minDate: "2010-01-01",
    maxDate: "2021-12-31",

    formValid: false,
    dateInputRules: [(v) => !!v || "Date is required"],
  }),
  computed: {
    fromDateDisplay() {
      return this.fromDateVal;
    },
    toDateDisplay() {
      return this.toDateVal;
    },
  },
};
</script>

<style></style>
