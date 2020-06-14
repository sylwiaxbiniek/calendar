<template>
  <v-app>
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Calendar from "./components/Calendar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Calendar
  },

  data: () => ({
    //
  })
});
</script>
