<template lang="pug">
  .cart.mt-4
    .container.is-flex.is-flex-direction-row
      b-icon(icon='cart-arrow-right' size='is-large')
      h1.title Cart
    .columns
      .column.display(v-for='(item,index) in Cart')
        .card.mt-1
          .card-content
              figure.image.is-48x48
                img(:src='item.image' alt='Placeholder image')
              p {{item.name}} {{item.brand}}
              p Price: {{item.price}} $
              //- b-button(type='is-danger' @click='removeFromCart(item,index)') Remove
              span Quantity: {{item.count}}
              b-button(type='is-danger' @click='removeFromCartBtn(item)') Remove
      .column
              //- b-button(@click='increment(item.id)') increment
      p Total Amount:{{cartTotalAmount}} $


</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'cartPage',
  computed: {
    ...mapGetters({
      Cart: 'cart/getCart',
      cartTotalAmount: 'cart/cartTotalAmount',
    }),
  },

  methods: {
    ...mapActions({
      incrementStock: 'product/incrementStock',
      decrementStock: 'product/decrementStock',
      removeFromCart: 'cart/removeFromCart',
    }),
    removeFromCartBtn(item) {
      this.removeFromCart(item)
      for (let i = 0; i < item.count; i++) {
        this.incrementStock(item)
      }
    },
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
/* .display {
  width: 30em;
} */
</style>
