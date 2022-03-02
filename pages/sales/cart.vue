<template lang="pug">
  .cart.mt-4
    .container.is-flex.is-flex-direction-row
      b-icon(icon='cart-arrow-right' size='is-large')
      h1.title Cart
    .columns.is-centered
      .column.is-7
        .container.is-flex.is-justify-content-center(v-for='(item,index) in Cart')
          .card.mt-1.cardWidth
            .card-content.is-flex.is-flex-direction-column.is-align-items-center
                figure.image.is-48x48
                  img(:src='item.image' alt='Placeholder image')
                p {{item.name}} {{item.brand}}
                p Price: {{item.price}} $
                span Quantity: {{item.count}}
                div
                  b-button(type='is-danger' @click='removeFromCartBtn(item)') Remove
      .column.amount
        p.subtitle Total Amount:
        p.total {{cartTotalAmount}} $


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
