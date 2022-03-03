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
          p(v-if='Stock(item)!=0') In Stock: {{Stock(item)}}
          p(v-if='Stock(item)==0') Sorry, we are out of stock at the moment.
          br
          b-button(@click="addToCart(item)" type="is-success" :disabled='Stock(item)==0') Add To Cart
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'toolPage',
  props: ['item'],
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
    }),
  },
  computed: {
    ...mapGetters({
      Stock: 'product/getItemStock',
    }),
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
</style>
