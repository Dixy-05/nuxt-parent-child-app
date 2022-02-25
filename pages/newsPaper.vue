<template lang="pug">
div
  .columns.mt-3
    .column.is-3
      sports-component
    .column
      nuxt-child
      b-button( type='is-success' @click="doThis") Click here
    .column.is-3
      h1 Local News
      .columns.is-centered(v-for='(article,index) in articles')
        article-component.mt-5(:title='articles[index].title' :text='articles[index].text' :color='articles[index].color')
    section
      div(v-if='loading.show')
        p Hey everything is working just fine!!
</template>
<script>
import Sports from '~/components/sports.vue'
import Article from '~/components/article.vue'
export default {
  components: { 'sports-component': Sports, 'article-component': Article },
  data() {
    return {
      loading: {
        show: false,
      },
      articles: [
        {
          title: 'New Park',
          text: 'New kids park by GoodLearning school, brings joy to the kids.',
          color: 'is-primary',
        },
        {
          title: 'Fire Station',
          text: 'Fire fighters bought a new fire truck, and they love it.',
          color: 'is-dark',
        },
        {
          title: 'Library',
          text: 'Local library opens new online programs do to Covid',
          color: 'is-warning',
        },
      ],
    }
  },
  methods: {
    doThis() {
      this.loading.show = true
    },
  },
}
</script>
