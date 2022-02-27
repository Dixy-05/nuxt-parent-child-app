<template lang="pug">
  .economy
    h1.title World economy
    P.subTitle Gas price keeps increasing!!
    h2 Gas Price: {{price}}
    b-button(@click="$emit('decrease')" type='is-danger') Decrease Price
</template>
<script>
export default {
  name: 'economyPage',
  props: {
    price: Number,
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
