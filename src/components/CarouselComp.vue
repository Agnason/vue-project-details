<template>
    <div class="wrapper">
        <div class="carousel center" :style="{
            'margin-left': '-' + (100 * currentSlideIndex) + '%'
        }">
            <CarouselItemComp v-for="item in carousel_data" :key="item.id" :item_data="item" />

        </div>
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
    </div>
</template>

<script>
import CarouselItemComp from './CarouselItemComp.vue';

export default {
    name: 'CarouselComp',
    components: {
        CarouselItemComp
    },

    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {

            currentSlideIndex: 0
        };
    },

    mounted() {

    },

    methods: {
        prevSlide() {
            if (this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }

        },
        nextSlide() {
            if (this.currentSlideIndex >= this.carousel_data.length - 1) { this.currentSlideIndex = 0 }
            else { this.currentSlideIndex++ }

        }
    },
};
</script>

<style lang="scss" scoped>
$widthSite-laptop: 1201px;
$widthSite-laptop-center: $widthSite-laptop / 2;
$colorHeader: #292F36;
$colorText: #4D5053;
$colorWhite: #FFFFFF;
$colorBackground: #F4F0EC;
$colorCounterBlock: #CDA274;
$colorBlock: #F4F0EC;

* {
    margin: 0px;
    padding: 0px;
}

.center {
    padding-left: calc(50% - $widthSite-laptop-center);
    padding-right: calc(50% - $widthSite-laptop-center);
}

.wrapper {
    max-width: 585px;
    overflow: hidden
}

.carousel {
    display: flex;
    transition: all ease .5s;
}
</style>
