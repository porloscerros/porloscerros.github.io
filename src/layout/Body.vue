<template>
    <!-- begin::Body -->
    <div class="page-body h-full w-full">

<!--        <body-left-aside></body-left-aside>-->

        <div class="h-full w-full">
            <!-- <body-subheader></body-subheader>-->
            <div class="page-content h-full w-full">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <!-- end:: Body -->
</template>

<script>
export default {
    name: "Body",
}
</script>

<style scoped>

</style>
