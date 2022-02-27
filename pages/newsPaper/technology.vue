<template lang="pug">
  .technology
    h1.title World technology
    P.subTitle New Tesla car is coming out!!
    b-button.mb-5(@click='showMovies' type='is-info') Show new technologies
</template>
<script>
export default {
  name: 'technologyPage',
  data() {
    return {}
  },
  methods: {
    showMovies() {
      this.$emit('showMovies')
    },
  },
}
</script>
<style>
.title {
  font-size: 3em;
  text-justify: auto;
}
.subTitle {
  font-size: 1.5em;
}
</style>
