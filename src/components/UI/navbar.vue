<template>
  <div
    class="h-20 block mt-0my-5 mx-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
  >
    <div class="text-2xl ml-3.5">
      <router-link to="/">KUSAKINS DEV</router-link>
    </div>
    <div class="ml-3.5 mt-3">
      <router-link to="/"><myButton class="mr-3">HOME</myButton></router-link>
      <router-link to="/contacts"
        ><myButton class="mr-3">CONTACTS</myButton></router-link
      >
      <router-link to="/about"
        ><myButton class="mr-3">ABOUT ME</myButton></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<style scoped></style>
