<template lang="pug">
.cart.mt-4
  .container.is-flex.is-flex-direction-row
    b-icon(icon='cart-arrow-right' size='is-large')
    h1.title Cart
  .columns(v-for='(item,index) in Cart')
    .column.is-8
      .columns
        .column
          figure.image.is-48x48
            img(:src='item.image' alt='Placeholder image')
        .column
          p {{item.name}} {{item.brand}}
          p Price: {{item.price}} $
        .column
          b-input(:value="item.quantity", @input="updateStock({item, quantity: $event})", type="number", min="0", max="100")
    .column.is-4
      b-button(type='is-danger' @click='removeFromCart(item)') Remove
  .columns
    .column.amount
      p.subtitle Total Amount:
      p.total {{cartTotalAmount}} $
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  computed: {
    ...mapGetters({
      Cart: 'cart/getCart',
      cartTotalAmount: 'cart/cartTotalAmount',
    }),
  },

  methods: {
    ...mapActions({
      updateStock: 'cart/updateStock',
      removeFromCart: 'cart/removeFromCart',
    }),
  },
}
</script>
<style scoped>
.title {
  font-size: 2em;
}
.amount {
  text-align: center;
}
.total {
  font-size: 2em;
  font-weight: bold;
}
.cardWidth {
  width: 70%;
  /* text-align: center; */
}
</style>
