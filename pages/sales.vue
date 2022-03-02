<template lang="pug">
  .sales.mt-3
    .columns
      .column.is-3
        .tile.is-parent
          article.tile.is-child.notification.is-info
            p.title Daily Sales
            p.subtitle.mb-0 Find the best prices
            .images.is-flex.is-align-items-center.is-flex-direction-column(v-for='(item,index) in saleItems')
              figure.image.is-128x128.mt-5(:key='`item-${index}`')
                span {{item.title}}
                nuxt-link(:to='{name:item.name}')
                  img(:src="item.image" @click='hideMessage')

      .column
        .frontPage.mt-3(v-if='loading.isSale')
          section.hero.is-success
            .hero-body
              .title
                p OBJECTIVE NEWS
                p Sales Section
              p.subtitle
                | The way to find the best sales near you all year long !!
          section.mt-5
            b-image(:src="require('~/assets/shoppingOnline.jpg')" alt='Shopping Online' ratio='601by235' :rounded='false')


        nuxt-child( v-if='!loading.isSale')
      .column.is-2
        .cart
          nuxt-link(to='/sales/cart')(v-if='$route.path!==`/sales/cart`')
            b-button.is-dark(@click='hideMessage')
              b-icon.mr-1(icon="cart-arrow-down")
              | Go to Cart
              span.tag.is-link.is-normal.ml-1(v-if='cartQuantity!==0') {{cartQuantity}}
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'salesPage',
  data() {
    return {
      loading: {
        isSale: true,
      },
    }
  },
  // mounted() {
  //   console.log('Cart.sales:', this.$route)
  // },
  computed: {
    ...mapGetters({
      Cart: 'cart/getCart',
      cartQuantity: 'cart/cartQuantity',
      saleItems: 'product/getSaleItems',
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
    hideMessage() {
      this.loading.isSale = false
    },
  },
}
</script>
