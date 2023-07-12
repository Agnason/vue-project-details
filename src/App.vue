<template>
  <div>
    <HeaderComp></HeaderComp>

    <CarouselComp :carousel_data="SlidersItem"></CarouselComp>
    
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
import CarouselComp from './components/CarouselComp.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    FooterComp,
    HeaderComp,
    CarouselComp
  },

  data() {
    return {

    };
  },

  computed: {
    ...mapState(['SlidersItem'])
  }
}
</script>

<style lang="scss"></style>
