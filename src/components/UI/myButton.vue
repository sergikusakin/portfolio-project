<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "myButton",
  data() {
    return {};
  },
});
</script>

<style scoped></style>
