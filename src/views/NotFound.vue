<template>
    <div class="m-grid m-grid--hor m-grid--root m-page">
        <div class="m-grid__item m-grid__item--fluid m-grid  m-error-1" style="background-image: url(/img/error/bg1.jpg);">
            <div class="m-error_container">
                <span class="m-error_number">
                    <h1>404</h1>
                </span>
                <p class="m-error_desc">
                    OOPS! La página que buscas no existe
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>

</style>
