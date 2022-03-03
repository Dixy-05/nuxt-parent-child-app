<template lang="pug">
.cart.mt-4
  .container.is-flex.is-flex-direction-row
    b-icon(icon='cart-arrow-right' size='is-large')
    h1.title Cart
  hr
  .columns(v-for='(item,index) in Cart')
    .column.is-8
      .columns
        .column
          figure.image.is-48x48
            img(:src='item.image' :alt='item.name+` Image`')
        .column
          p {{item.name}}
            b  {{item.brand}}
          p Price: {{item.price}} $
          p In Stock: {{Stock(item)}}
        .column
          b-input(:value="item.quantity", @input="updateQuantity({item, quantity: $event})", type="number", min="1", :max="Stock(item)===0?item.quantity:100")
    .column.is-4
      b-button(type='is-danger' @click='removeFromCart(item)') Remove
  .columns
    .column.amount
      hr
      p.totalTitle Total Amount:
      p.total.mt-0 {{cartTotalAmount}} $
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  computed: {
    ...mapGetters({
      Cart: 'cart/getCart',
      cartTotalAmount: 'cart/cartTotalAmount',
      Stock: 'product/getItemStock',
    }),
  },

  methods: {
    ...mapActions({
      updateQuantity: 'cart/updateQuantity',
      removeFromCart: 'cart/removeFromCart',
    }),
    // inStock(item) {
    //   const lookup = find(this.Product, { id: item.id })
    //   return lookup.inStockQuantity
    // },
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
.totalTitle {
  font-size: 1.5em;
}
</style>
