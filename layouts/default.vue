<template lang="pug">
  .Objective-layout.default-layout
    navbar
    .container
      nuxt
    footer.footer.has-sticky-footer
      .has-text-centered
        footer-content
</template>

<script>
import FooterContent from '~/components/footerContent.vue'
import Navbar from '~/components/navbar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    'objective-navbar': Navbar,
    'footer-content': FooterContent,
  },

  data() {
    return {}
  },
}
</script>
