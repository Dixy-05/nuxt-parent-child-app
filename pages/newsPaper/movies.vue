<template lang="pug">
.movies
  aside.menu
    p.menu-label
      | New Movies
    ul.menu-list
      li
      a Anaconda 5
      li
        a Rambo No bullets
    p.menu-label
      | New Shows
    ul.menu-list
      li
        a The funny show
      li
        a The murder show
      li
        nuxt-link.is-active(to='/newsPaper/movies/theaters') Theaters
  nuxt-child( @theater="(payload) => $emit('showTheater',payload)" :newTheater='newTheater' )
</template>
<script>
export default {
  name: 'MoviesPage',
  props: {
    newTheater: {
      type: String, default: '', required: true},
  },
}
</script>
