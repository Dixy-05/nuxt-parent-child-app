import { map, sum, uniq } from 'lodash'

export default {
  getCart: (state) => {
    return uniq(state.cartItems)
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
