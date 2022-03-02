// product actions
import { find } from 'lodash'

export default {
  incrementStock({ commit, state }, payload) {
    const item = find(state.items, { id: payload.id })
    return commit('INCREMENT_STOCK', item)
  },
  decrementStock({ commit, state }, payload) {
    const item = find(state.items, { id: payload.id })
    return commit('DECREMENT_STOCK', item)
  },
}
