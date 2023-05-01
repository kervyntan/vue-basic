<template>
    <!-- 
        Overlay that darkens the rest of screen
        when modal is open 
    -->
    <div class="backdrop">
        <!-- presence of class "active" depends on truthiness of isActive -->
        <!-- Binding of styling-->
        <div class="modal" :class="{ active : isActive }" 
            :style="{fontSize : fontSize + 'px'}">
            <p :style="{color : activeColor}"> Modal Content </p>
        </div>

        <!-- Can also dynamically bind class to an array of classes-->
        <!-- Toggle classes conditionally -->
        <!-- Always applies class "additionalClass", but not "activeClass" -->
        <div class="modal-dynamic" :class="[isActive ? activeClass : '', additionalClass]"></div>
    </div>
</template>

<script>
export default {
    name : "Modal",
    data() {
        return {
            isActive : true,
            activeColor : "red",
            fontSize : 15,
            activeClass : 'active',
            additionalClass : 'additional'
        }
    }
}
</script>
<!--
    Scoped styles - limit the styles to be applied to this template only
-->
<!-- <style scoped>
</style> -->
<style>
.modal {
    width : 400px;
    padding : 20px;
    margin : 100px auto;
    background : #fff;
    border-radius : 10px;
}

.backdrop {
    top : 0;
    position : fixed;
    background : rgba(0, 0, 0, 0.5);
    width : 100%;
    height : 100%;
}
</style>