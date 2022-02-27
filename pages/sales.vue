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
                nuxt-link(:to='item.path')
                  img(:src="item.image" @click='hideMessage')

      .column
        p(v-if='!loading.isSale') The best way to find the best sales near you all year long !!
        nuxt-child
      .column.is-2
        a.button.is-dark
          b-icon.mr-1(icon="cart-arrow-down")
          | Go to Cart


</template>
<script>
export default {
  name: 'salesPage',
  data() {
    return {
      loading: {
        isSale: false,
      },
      saleItems: [
        {
          path: '/sales/tools',
          title: 'Tools',
          image: require(`~/assets/tools.jpg`),
        },
        {
          path: '/sales/groceries',
          title: 'Groceries',
          image: require(`~/assets/groceries.jpg`),
        },
        {
          path: '/sales/cars',
          title: 'Cars',
          image: require(`~/assets/cars.jpg`),
        },
      ],
    }
  },
  methods: {
    hideMessage() {
      this.loading.isSale = true
      console.log('working')
    },
  },
}
</script>
