<template lang="pug">
p
  span.is-size-7 &copy; {{ new Date().getFullYear() }} Objective News,
  span.is-size-7.is-hidden-mobile &nbsp; | &nbsp; #[nuxt-link(to="/about") Privacy]
  span.is-size-7.is-hidden-mobile &nbsp; | &nbsp; #[nuxt-link(to="/about") Cookies]
  span.is-size-7.is-hidden-mobile &nbsp; | &nbsp; #[nuxt-link(to="/about") ToS]
  span.is-size-7.is-hidden-mobile &nbsp; | &nbsp; #[nuxt-link(to="/about") EULA]
  span.is-size-7.is-hidden-mobile &nbsp; | &nbsp; #[nuxt-link(to="/about") Refund]
  span.is-size-7 &nbsp; | &nbsp; #[nuxt-link(to="/about") About]
  span.is-size-7 &nbsp; | &nbsp; #[nuxt-link(to="/about") Contact]
  span.is-size-7 &nbsp; | &nbsp; #[nuxt-link(to="/about") Help]
</template>

<script>
export default {
  name: 'FooterContent',
}
</script>
