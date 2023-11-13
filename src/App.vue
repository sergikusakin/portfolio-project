<template>
  <navBar> </navBar>
  <div>hi there!</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navBar from "@/components/UI/navbar.vue";

export default defineComponent({
  data() {
    return {};
  },
  components: {
    navBar,
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
