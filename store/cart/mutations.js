import { findIndex, pick } from 'lodash'
export default {
  ADD_TO_CART(state, item) {
    if (!item.quantity) {
      item.quantity = 1
    }
    state.cartItems.push(pick(item, ['quantity', 'id', 'name', 'price']))
  },
  REMOVE_FROM_CART(state, payload) {
    state.cartItems = payload
  },
  INCREMENT(state, item) {
    console.log('item', item)
    const lookup = findIndex(state.cartItems, { id: item.id })
    state.cartItems[lookup].quantity++
  },
  DECREMENT(state, item) {
    console.log('item', item)
    const lookup = findIndex(state.cartItems, { id: item.id })
    state.cartItems[lookup].quantity--
  },
}
