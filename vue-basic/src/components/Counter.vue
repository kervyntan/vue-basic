<template>
<div class="counter"> {{ count }} </div>
<button class="btn" @click="increment">Increment value</button>
<p className="message" v-show="isCountMoreThan10"> {{  message }} </p>

    <div v-for="counter in listOfCounters"> 
        <span> {{ convertToOffice }}</span>
        <p> This is my counter number -  {{ counter.number }} </p>
        <p> This is the type of the location - {{ counter.type }}</p>
    </div>

</template>

<script>
import { watch } from 'vue';
export default {
    data() {
        return {
            count : 0,
            message : `You have clicked this less than ${this.count} times`,
            isCountMoreThan10 : false,
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

    computed : {
        convertToOffice() {
            return  this.count >= 10 
                    ? this.listOfCounters = [{
                        type : "office",
                        number : 1
                    }]
                    : ""
        }
    },

    watch: {
        count: function(value) {
            // If "pageData" ever changes, then we will console log its new value.
            console.log(value);
            // if (value < 10) {
            //     // need to use this to point to the correct instance
            //     this.message = `You have clicked this less than ${value} times`;
            //     // reference the value of count using the argument passed into the above function
            // } else {
            if (value >= 10) {
                this.isCountMoreThan10 = true;
                this.message = `You have clicked this far too many times, ${value} times to be exact`;
            }
        }
    }
}
</script>

<style>
.message {
    font-weight : 700;
}
</style>