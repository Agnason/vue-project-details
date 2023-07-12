<template>
    <div class="carousel_item">
<img :src=" require('../assets/bedroom/'+item_data.img)" alt="">
    </div>
</template>

<script>
export default {
    name: 'CarouselItemComp',

    props: {
        item_data: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>