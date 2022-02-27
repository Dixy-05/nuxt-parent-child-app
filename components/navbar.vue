<template lang="pug">
  b-navbar(type='is-dark')
    template(#brand='')
      b-navbar-item(tag='router-link' :to="{ path: '/newsPaper' }")
        b-icon(icon="newspaper-variant-multiple-outline")
        span OBJECTIVE NEWS
    template(#start='')
      b-navbar-item(href='/')
        | Home
      b-navbar-item(href='/newsPaper')
        | News Paper
      b-navbar-item(href='/sales')
        | Sales
      b-navbar-dropdown(label='Info')
        b-navbar-item(href='/about')
          | About
    template(#end='')
      b-navbar-item(tag='div')
        //- .cart
        //- nuxt-link(to="/cart")
        //-   span Add to Cart
        .buttons
          a.button.is-info
            strong Sign up
          a.button.is-light
            | Log in
</template>
<script>
export default {
  name: 'navbarComponent',
}
</script>
