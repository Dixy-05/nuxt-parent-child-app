export default {
  ADD_TO_CART(state, item) {
    state.cart.push(item)
  },
  REMOVE_FROM_CART(state, payload) {
    state.cart = payload
  },
}
