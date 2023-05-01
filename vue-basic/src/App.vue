<template>
  <Modal />
</template>

<script>
import Modal from "../src/components/Modal.vue";

export default {
  name : 'App',
  components : { Modal },
  data() {
    return {
      // isActive : true
    }
  }
}
</script>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
