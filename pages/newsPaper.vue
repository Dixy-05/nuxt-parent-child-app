<template lang="pug">
div
  .columns.mt-3
    .column.is-3
      sports-component
    .column
      section
        b-breadcrumb(align='is-left')
          b-breadcrumb-item(tag='nuxt-link' to='/newsPaper/politics') Politics
          b-breadcrumb-item(tag='nuxt-link' to='/newsPaper/economy') Economy
          b-breadcrumb-item(tag='nuxt-link' to='/newsPaper/technology') Technology
          b-breadcrumb-item(tag='nuxt-link' to='/newsPaper/movies') Movies

      h1 THE WORLD NEWS
      nuxt-child(@showMovies='showMovies' :price='state.price' @showTheater='showTheater' :newTheater='model.sendData' @decrease='decreasePrice' )
      b-button.mt-4(type='is-success' @click="increasePrice") Increase Price
      b-field(label="Create Theater")
        b-input(v-model='model.newTheater')
      b-button.mt-2(type="success" @click='sendTheater') Send Theater
      section
        b-field
          b-tag(v-if='loading.isTagActive' type='is-primary' closable='' aria-close-label='Close tag' @close='loading.isTagActive = false')
            |{{theater}}
      section
        .menu.mt-5(v-if='loading.show')
          p.menu-label
            | New Technologies
          ul.menu-list
            li
              a Nuxt.js
            li
              a Objection.js
    .column.is-3
      h1 Local News
      .columns.is-centered(v-for='(article,index) in articles')
        article-component.mt-5(:key='`article-${index}`' :title='articles[index].title' :text='articles[index].text' :color='articles[index].color')
</template>
<script>
import Sports from '~/components/sports.vue'
import Article from '~/components/article.vue'
export default {
  components: {
    'sports-component': Sports,
    'article-component': Article,
  },
  data() {
    return {
      model: {
        newTheater: '',
        sendData: '',
      },
      state: {
        price: 0,
        theater: '',
      },
      loading: {
        show: false,
        isTagActive: false,
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
    increasePrice() {
      this.state.price++
    },
    decreasePrice() {
      this.state.price--
    },
    showMovies() {
      this.loading.show = true
      setTimeout(() => {
        this.loading.show = false
      }, 5000)
    },
    showTheater(payload) {
      this.theater = payload
      this.loading.isTagActive = true
    },
    sendTheater() {
      this.model.sendData = this.model.newTheater
      this.model.newTheater = ''
    },
  },
}
</script>
