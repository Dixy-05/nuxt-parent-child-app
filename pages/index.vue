<template lang="pug">
  .dashboard
    .container.mt-5
      .columns.mainView
        .column.is-flex.is-justify-content-center.is-align-items-center.is-flex-direction-column
          .titleDiv
            h1.title OBJECTIVE NEWS
             b-icon(icon="newspaper-variant-multiple-outline" size='is-large')
          p Your every day online news paper, bringing you the most relevant news, written in an objective way.
          nuxt-link(to='/newspaper')
            b-button.mt-3(type='is-info' outlined) Go to Newspaper
      .columns.is-centered.mb-6
        p Follow us on
        a.social(href='https://www.facebook.com/' target="_blank")
          b-icon.facebook(icon='facebook' ) &nbsp; | &nbsp;
        a.social(href='https://twitter.com/' target="_blank")
          b-icon.twitter(icon='twitter') &nbsp; | &nbsp;
        a.social(href='https://www.instagram.com/' target="_blank")
          b-icon.instagram(icon='instagram') &nbsp; | &nbsp;
</template>
<script>
export default {
  name: 'dashboardPage',
}
</script>
<style scoped>
.title {
  font-size: 4em;
  font-family: 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.mainView {
  height: 70vh;
}
.facebook:hover {
  color: #3b5998;
}
.twitter:hover {
  color: #1da1f2;
}
.instagram:hover {
  color: #c13584;
}
.social {
  color: black;
}
</style>
