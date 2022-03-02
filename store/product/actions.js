// product actions
import { find } from 'lodash'

export default {
  incrementStock({ commit, state }, item) {
    return commit('INCREMENT_STOCK', find(state.items, { id: item.id }))
  },
  decrementStock({ commit, state }, item) {
    return commit('DECREMENT_STOCK', find(state.items, { id: item.id }))
  },
}
