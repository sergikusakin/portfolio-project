<template>
  <div class="navbar">
    <div class="navbar-logo">KUSAKINS DEV</div>
    <div class="navbar-btns">
      <myButton class="btn-nav">HOME</myButton>
      <myButton class="btn-nav">CONTACTS</myButton>
      <myButton class="btn-nav">ABOUT ME</myButton>
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

<style scoped>
.navbar {
  background-color: rgb(5, 170, 188);
  height: 100px;
  align-content: center;
}

.navbar-logo {
  padding: 20px;
}

.navbar-btns {
  padding-top: 0;
  padding-left: 20px;
}

.btn-nav {
  height: 50px;
  padding-right: 10px;
}
</style>
