<template lang="pug">
  .tools
    section(v-if='load.tools')
      h1.title Tools
      .cards(v-for='(item,index) in items')
        nuxt-link(:to='item.path')
          .card.mt-2(:key='`card-${index}`' @click="displayTool(item)")
            .card-content
              .media
                .media-left
                  figure.image.is-128x128
                    img(:src="item.image" :alt='item.title')
                .media-content
                  p.title.is-4 {{item.brand}}
                  p.subtitle.is-6 {{item.title}}
              .content
                | Lorem ipsum dolor sit amet,
                | Phasellus nec iaculis mauris.
              a @{{item.brand}}
    section(v-if='!load.tools')
      h1.title {{state.tool}}
      nuxt-child(:tool="state.tool" :item="state.item")

</template>
<script>
export default {
  name: 'toolsPage',
  data() {
    return {
      state: {
        tool: this.$route.params.tool,
        item: {},
      },
      load: {
        tools: true,
      },
      items: [
        {
          title: 'Hammer',
          brand: 'Stanley',
          image: require('~/assets/hammer.jpg'),
          path: '/sales/tools/hammer',
        },
        {
          title: 'Saw',
          brand: 'JON Bhandari Tools',
          image: require('~/assets/saw.jpg'),
          path: '/sales/tools/saw',
        },
        {
          title: 'Pliers',
          brand: 'Stanley',
          image: require('~/assets/pliers.jpg'),
          path: '/sales/tools/pliers',
        },
        {
          title: 'Screwdrivers',
          brand: 'Stanley',
          image: require('~/assets/screwdrivers.jpg'),
          path: '/sales/tools/screwdrivers',
        },
      ],
    }
  },
  methods: {
    displayTool(item) {
      this.load.tools = false
      this.state.item = item
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
</style>
