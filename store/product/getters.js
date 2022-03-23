import { find } from 'lodash'
export default {
  getItems: (state) => {
    return state.items
  },
  getSaleItems: (state) => {
    return state.saleItems
  },
  getItemStock: (state) => (item) => {
    const lookup = find(state.items, { id: item.id })
    return lookup?.inStockQuantity || 0
  },
}
