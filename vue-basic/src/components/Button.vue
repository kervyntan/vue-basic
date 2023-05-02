<template>
<button type="button" :class="className" @click="onClick"> {{ text }}</button>
</template>

<script>
export default {
    name : "Button",
    props : {
        className : { 
            type : String
        },
        onClick : {
            type : Function
        },
        text : {
            type : String
        }
    }
}
</script>

<style>

</style>