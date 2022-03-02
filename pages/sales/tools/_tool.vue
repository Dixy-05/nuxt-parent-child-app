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
          p(v-if='item.stock!=0') In Stock: {{item.stock}}
          p(v-if='item.stock==0') Sorry, we are out of stock at the moment.
          br
          b-button(@click="addToCartBtn(item)" type="is-success" :disabled='item.stock==0') Add To Cart
          //- b-button(@click="$emit('addToCart',item)" type="is-success") Add To Cart
</template>
<script>
import { capitalize } from 'lodash'
import { mapActions } from 'vuex'
export default {
  name: 'toolPage',
  props: ['item', 'stock'],
  // mounted() {
  //   console.log('tool is mounted')
  // },
  methods: {
    ...mapActions({
      addToCart: 'cart/addToCart',
      decrementStock: 'product/decrementStock',
    }),
    addToCartBtn(item) {
      this.addToCart(item)
      this.decrementStock(item)
    },
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
