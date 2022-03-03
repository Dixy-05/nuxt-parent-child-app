// cart actions
import { find } from 'lodash'

export default {
  addToCart({ dispatch, commit, state }, item) {
    const hasItem = find(state.cartItems, { id: item.id })

    if (hasItem) {
      dispatch('increment', item)
    } else {
      commit('ADD_TO_CART', item)
      dispatch('product/decrementStock', item, { root: true }) // root is vuex setup for dispatch between stores
    }
  },
  removeFromCart({ commit, state, dispatch }, item) {
    for (let i = 0; i < item.quantity; i++) {
      dispatch('product/incrementStock', item, { root: true }) // root is vuex setup for dispatch between stores
    }
    const newCart = state.cartItems.filter((cartItem) => cartItem !== item)
    return commit('REMOVE_FROM_CART', newCart)
  },
  increment({ dispatch, commit, state }, item) {
    const lookup = find(state.cartItems, { id: item.id })
    if (!lookup) {
      dispatch('addToCart', item)
    } else {
      commit('INCREMENT', lookup)
      dispatch('product/decrementStock', item, { root: true }) // root is vuex setup for dispatch between stores
    }
  },
  decrement({ dispatch, commit, state }, item) {
    const lookup = find(state.cartItems, { id: item.id })

    if (!lookup) {
      return null
    } else {
      commit('DECREMENT', item)
      dispatch('product/incrementStock', item, { root: true }) // root is vuex setup for dispatch between stores
    }
  },
  updateQuantity({ dispatch, state }, { item, quantity }) {
    const lookup = find(state.cartItems, { id: item.id })

    if (!lookup) {
      dispatch('addToCart', item)
    } else if (lookup.quantity < quantity) {
      dispatch('increment', item)
    } else {
      dispatch('decrement', item)
    }
  },
}
