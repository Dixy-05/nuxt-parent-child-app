export default {
  getStock: (state) => {
    return state.items.map((item) => item.stock)
  },
  getItems: (state) => {
    return state.items
  },
}
