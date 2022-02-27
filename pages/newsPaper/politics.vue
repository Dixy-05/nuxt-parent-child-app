<template lang="pug">
  .politics
    h1.title World politics
    P.subTitle War between Russia and Ukraine!!
    b-button(type='is-primary' @click='moreNews') More News
    p.subTitle(v-if='more') Some more political news !!
</template>
<script>
export default {
  name: 'politicsPage',
  data() {
    return {
      more: false,
    }
  },
  methods: {
    moreNews() {
      this.more = true
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
