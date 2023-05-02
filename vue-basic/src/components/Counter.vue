<template>
<div class="counter"> {{ count }} </div>
<button class="btn" @click="increment">Increment value</button>
</template>

<script>
import { watch } from 'vue';
export default {
    data () {
        return {
            count : 0
        }
    },
    methods : {
        increment() {
            this.count++;
        }
    },
    watch: {
        count: function(value) {
            // If "pageData" ever changes, then we will console log its new value.
            console.log(value);
        }
    }
}
</script>

<style>

</style>