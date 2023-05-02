<template>
<div class="counter"> {{ count }} </div>
<button class="btn" @click="increment">Increment value</button>
<p v-for="counter in listOfCounters"> This is my counter number -  {{ counter.number }} </p>
<p> {{  message }} </p>
</template>

<script>
import { watch } from 'vue';
export default {
    data() {
        return {
            count : 0,
            message : `You have clicked this less than ${this.count} times`,
            listOfCounters : [
                { 
                    type : "counter",
                    number : 0
                }
            ]
            // message : `You have clicked this less than 0 times`
        }
    },
    methods : {
        increment() {
            this.count++;
            const currentCount = this.count;

            this.listOfCounters.push({
                type : "counter",
                number : currentCount
            })
        }
    },
    watch: {
        count: function(value) {
            // If "pageData" ever changes, then we will console log its new value.
            console.log(value);
            if (value < 10) {
                // need to use this to point to the correct instance
                this.message = `You have clicked this less than ${value} times`;
                // reference the value of count using the argument passed into the above function
            } else {
                this.message = `You have clicked this far too many times, ${value} times to be exact`;
            }
        }
    }
}
</script>

<style>

</style>