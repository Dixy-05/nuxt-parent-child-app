// product actions
import { find } from 'lodash'

export default {
  incrementStock({ commit, state, dispatch }, item) {
    const lookup = find(state.items, { id: item.id })

    if (!lookup) {
      console.log('This item was not found')
      return
    }
    return commit('INCREMENT_STOCK', lookup)
  },
  decrementStock({ commit, state }, item) {
    const lookup = find(state.items, { id: item.id })
    if (!lookup) {
      console.log('This item was not found')
      return
    }
    return commit('DECREMENT_STOCK', lookup)
  },
}
