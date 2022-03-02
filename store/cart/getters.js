import { uniq } from 'lodash'

export default {
  getCart: (state) => {
    return uniq(state.cart)
  },

  cartTotalAmount: (state) => {
    const prices = state.cart.map((item) => item.price)
    if (prices.length) {
      return prices.reduce((total = 0, num) => total + num)
    } else {
      return 0
    }
  },
  cartQuantity: (state) => {
    return state.cart.length
  },
}
