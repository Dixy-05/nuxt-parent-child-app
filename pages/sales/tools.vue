<template lang="pug">
.tools
  section(v-if='tools')
    h1.title Tools
    .cards(v-for='(item,index) in Items')
      nuxt-link(:to='item.path')
        .card.mt-2(:key='`card-${index}`' @click="displayTool(item)")
          .card-content
            .media
              .media-left
                figure.image.is-128x128
                  img(:src="item.image" :alt='item.name')
              .media-content
                p.title.is-4 {{item.brand}}
                p.subtitle.is-6 {{item.name}}
            .content
              | Lorem ipsum dolor sit amet,
              | Phasellus nec iaculis mauris.
            a @{{item.brand}}
  section(v-if='!tools')
    nuxt-child( :item='state.item' )

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ToolsPage',
  props: ['stock'],
  data() {
    return {
      state: {
        item: {},
      },
    }
  },
  // mounted() {
  //   console.log('tools is mounted')
  // },
  computed: {
    ...mapGetters({ Items: 'product/getItems', Stock: 'product/getStock' }),
    tools() {
      return !this.$route.params.tool
    },
  },
  methods: {
    displayTool(payload) {
      this.state.item = payload
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
</style>
