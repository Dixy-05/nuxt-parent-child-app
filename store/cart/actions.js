// cart actions
import { find } from 'lodash'

export default {
  addToCart({ dispatch, commit, state }, item) {
    const hasItem = find(state.cartItems, { id: item.id })

    if (hasItem) {
      dispatch('increment', item)
    } else {
      commit('ADD_TO_CART', item)
    }
  },
  removeFromCart({ commit, state }, payload) {
    const newCart = state.cartItems.filter((item) => item !== payload)
    return commit('REMOVE_FROM_CART', newCart)
  },
  increment({ dispatch, commit, state }, item) {
    const lookup = find(state.cartItems, { id: item.id })

    if (!lookup) {
      dispatch('addToCart', item)
    } else {
      commit('INCREMENT', lookup)
    }
  },
  decrement({ commit, state }, item) {
    const lookup = find(state.cartItems, { id: item.id })

    if (!lookup) {
      return null
    } else {
      commit('DECREMENT', item)
    }
  },
  updateStock({ dispatch, state }, { item, quantity }) {
    console.log('items update', item, quantity)
    const lookup = find(state.cartItems, { id: item.id })

    if (!lookup) {
      dispatch('addToCart')
    } else if (lookup.quantity < quantity) {
      dispatch('increment', item)
    } else {
      console.log('down')
      dispatch('decrement', item)
    }
  },
}
