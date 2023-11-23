<template>
  <div
    class="flex justify-around content-center items-center text-white text-lg mt-5 h-40 bg-violet-500"
  >
    <div><router-link to="/">KUSAKINS DEV</router-link></div>
    <div>Use technologies for you!</div>
    <div>
      <a href="https://www.linkedin.com/in/sergikusakin/"
        >social: @sergikusakin</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "pageFooter",
  data() {
    return {};
  },
});
</script>

<style scoped></style>
