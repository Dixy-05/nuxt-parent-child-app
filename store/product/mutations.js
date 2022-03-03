import { findIndex } from 'lodash'

export default {
  INCREMENT_STOCK(state, item) {
    const lookup = findIndex(state.items, { id: item.id })
    state.items[lookup].inStockQuantity++
  },
  DECREMENT_STOCK(state, item) {
    const lookup = findIndex(state.items, { id: item.id })
    state.items[lookup].inStockQuantity--
  },
}
