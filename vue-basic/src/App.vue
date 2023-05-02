<template>
  <!-- <Modal /> -->
  <Counter v-bind="details" />
</template>

<script>
import Modal from "../src/components/Modal.vue";
import Counter from "../src/components/Counter.vue";

export default {
  name : 'App',
  components : { Modal, Counter },
  data() {
    return {
      // isActive : true
      details : {
        buildingLocation : "520234",
        space : "320ft"
      }
    }
  }
}
</script>

<style scoped>

</style>
