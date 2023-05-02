<template>
    <p> {{ buildingLocation }}</p>
    <p> Available space : {{ space }} </p>
<div class="counter"> {{ count }} </div>
<Button :className="'btn'" :onClick="increment" :text="'Increment Value'" />
<!-- <button class="btn" @click="increment">Increment value</button> -->
<p ref="message" className="message" v-show="isCountMoreThan10"> {{ message }} </p>

    <div v-for="counter in listOfCounters"> 
        <span> {{ convertToOffice }}</span>
        <p> This is my counter number -  {{ counter.number }} </p>
        <p> This is the type of the location - {{ counter.type }}</p>
    </div>

</template>

<script>
import Button from "../components/Button.vue";

export default {
    name : "Counter",

    components : { Button },

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

    props : ['buildingLocation', 'space'],

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
            // If "count" ever changes, then we will console log its new value.
            console.log(value);
            console.log(this.$refs.message.innerHTML);
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