<template lang="pug">
.theaters
  ul.menu-list(v-for='(theater,index) in theaters')
    li(:key='`list-${index}`')
        a(@click='send') {{theater}}


</template>
<script>
export default {
  name: 'TheaterPage',
  props: {
    newTheater: String,
  },
  data() {
    return {
      theaters: ['Adventure', 'GoMovies', 'Fantasy'],
    }
  },
  watch: {
    newTheater(data) {
      this.theaters.push(data)
    },
  },
  methods: {
    send(e) {
      this.$emit('theater', e.target.innerText)
    },
  },
}
</script>
