<template>
  <div>
    <HeaderComp></HeaderComp>

  

    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';


export default {
  name: 'App',
  components: {
    FooterComp,
    HeaderComp,
    
  },

  data() {
    return {

    };
  },

  computed: {
   
  }
}
</script>

<style lang="scss"></style>
