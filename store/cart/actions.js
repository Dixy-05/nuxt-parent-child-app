// cart actions
import { find } from 'lodash'

export default {
  addToCart({ commit, state }, item) {
    const hasItem = find(state.cart, { id: item.id })
    if (!hasItem) {
      item.count = 1
    } else {
      item.count++
    }
    return commit('ADD_TO_CART', item)
  },
  removeFromCart({ commit, state }, payload) {
    const newCart = state.cart.filter((item) => item !== payload)
    return commit('REMOVE_FROM_CART', newCart)
  },
}
