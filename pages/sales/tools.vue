<template lang="pug">
  .tools
    section(v-if='tools')
      h1.title Tools
      .cards(v-for='(item,index) in items')
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
      nuxt-child(:stock="stock" :item='state.item' @addToCart="(payload)=>$emit('addToCart',payload)")

</template>
<script>
export default {
  name: 'toolsPage',
  props: ['stock'],
  data() {
    return {
      state: {
        item: {},
      },
      items: [
        {
          name: 'hammer',
          brand: 'Stanley',
          image: require('~/assets/hammer.jpg'),
          path: '/sales/tools/hammer',
          price: 7,
        },
        {
          name: 'saw',
          brand: 'JON Bhandari Tools',
          image: require('~/assets/saw.jpg'),
          path: '/sales/tools/saw',
          price: 10,
        },
        {
          name: 'pliers',
          brand: 'Stanley',
          image: require('~/assets/pliers.jpg'),
          path: '/sales/tools/pliers',
          price: 14,
        },
        {
          name: 'screwdrivers',
          brand: 'Stanley',
          image: require('~/assets/screwdrivers.jpg'),
          path: '/sales/tools/screwdrivers',
          price: 15,
        },
      ],
    }
  },
  mounted() {
    console.log('tools is mounted')
  },
  methods: {
    displayTool(item) {
      this.state.item = item
    },
  },
  computed: {
    tools() {
      return !this.$route.params.tool
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
</style>
