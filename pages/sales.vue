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


        nuxt-child(:stock="stock" @addToCart='addToCart' v-if='!loading.isSale')
      .column.is-2
        .cart
          a.button.is-dark
            b-icon.mr-1(icon="cart-arrow-down")
            | Go to Cart
          section(v-for='(item,index) in state.items')
            .card.mt-1
              .card-content
                  figure.image.is-48x48
                    img(:src='item.image' alt='Placeholder image')
                  p {{item.name}} {{item.brand}}
                  p Price: {{item.price}} $
                  b-button(type='is-danger' @click='removeFromCart(item,index)') Remove
          p Total Amount: {{state.amount}} $


</template>
<script>
export default {
  name: 'salesPage',
  data() {
    return {
      state: {
        items: [],
        amount: 0,
      },
      loading: {
        // isSale: false,
        isSale: true,
      },
      saleItems: [
        {
          name: 'sales-tools',
          title: 'Tools',
          image: require(`~/assets/tools.jpg`),
        },
        {
          name: 'sales-groceries',
          title: 'Groceries',
          image: require(`~/assets/groceries.jpg`),
        },
        {
          name: 'sales-cars',
          title: 'Cars',
          image: require(`~/assets/cars.jpg`),
        },
      ],
      stock: {
        hammer: 14,
        saw: 9,
        pliers: 5,
        screwDrivers: 7,
      },
    }
  },
  methods: {
    hideMessage() {
      // this.loading.isSale = true
      this.loading.isSale = false
    },
    addToCart(item) {
      this.stock[item.name]--
      this.state.items.push(item)
      this.add()
    },
    add() {
      this.state.amount = this.state.items
        .map((item) => item.price)
        .reduce((total = 0, num) => total + num)
    },
    removeFromCart(item, index) {
      this.stock[item.name]++
      this.state.items.splice(index, 1)
      this.state.amount -= item.price
    },
  },
}
</script>
