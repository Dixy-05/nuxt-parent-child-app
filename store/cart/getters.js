import { map, sum } from 'lodash'

export default {
  getCart: (state) => {
    return state.cartItems
  },

  cartTotalAmount: (state) => {
    let totalPrice = 0
    state.cartItems.forEach((i) => {
      totalPrice += i.price * i.quantity
      return 0
    })

    return totalPrice || 0
  },
  cartQuantity: (state) => {
    return sum(map(state.cartItems, 'quantity'))
  },
}
