<template>
    <!-- 
        Overlay that darkens the rest of screen
        when modal is open 
    -->
    <div class="backdrop">
        <!-- presence of class "active" depends on truthiness of isActive -->
        <div class="modal" :class="{ active : isActive }">
            <p> Modal Content </p>
        </div>
    </div>
</template>

<script>
export default {
    name : "Modal",
    data() {
        return {
            isActive : true
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