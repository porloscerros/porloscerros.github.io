<template>
    <!-- BEGIN: Subheader -->
    <div class="m-subheader ">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title ">
                    {{ title }}
                </h3>
            </div>
        </div>
    </div>
    <!-- END: Subheader -->
</template>

<script>
export default {
    name: "BodySubheader",
    computed: {
        title() {
            let title = '';
            let route = this.$route
            if (route.matched.length >= 2) {
                let parent = route.matched.slice(-2).shift()
                if (parent.meta && parent.meta.title)
                    title = parent.meta.title;
            }
            if (route.meta && route.meta.title)
                title += ` ${route.meta.title}`;
            return title;
        }
    },
    data() {
        return {
            //
        }
    },
}
</script>

<style scoped>

</style>
