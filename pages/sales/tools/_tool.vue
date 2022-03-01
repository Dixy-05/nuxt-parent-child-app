<template lang="pug">
  .tool
    .card
      .card-image
        figure.image.is-4by3
          img(:src="item.image" alt='Placeholder image')
      .card-content
        .media
          .media-content
            p.title.is-4 {{item.name}}
            p.subtitle.is-6 {{item.brand}}
        .content
          | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          | Phasellus nec iaculis mauris.
          a @{{item.brand}}
          p Price: {{item.price}} $
          p In Stock: {{stock[$route.params.tool]}}
          br
          b-button(@click="$emit('addToCart',item)" type="is-success") Add To Cart
</template>
<script>
import { capitalize } from 'lodash'
export default {
  name: 'toolPage',
  props: ['item', 'stock'],
  mounted() {
    console.log('tool is mounted')
  },
  computed: {
    tool() {
      return capitalize(this.$route.params.tool)
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
</style>
