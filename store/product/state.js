// product state
export default () => ({
  items: [
    {
      id: 1,
      name: 'hammer',
      brand: 'Stanley',
      image: require('~/assets/hammer.jpg'),
      path: '/sales/tools/hammer',
      price: 7,
      stock: 14,
    },
    {
      id: 2,
      name: 'saw',
      brand: 'JON Bhandari Tools',
      image: require('~/assets/saw.jpg'),
      path: '/sales/tools/saw',
      price: 10,
      stock: 9,
    },
    {
      id: 3,
      name: 'pliers',
      brand: 'Stanley',
      image: require('~/assets/pliers.jpg'),
      path: '/sales/tools/pliers',
      price: 14,
      stock: 5,
    },
    {
      id: 4,
      name: 'screwdrivers',
      brand: 'Stanley',
      image: require('~/assets/screwdrivers.jpg'),
      path: '/sales/tools/screwdrivers',
      price: 15,
      stock: 7,
    },
  ],
})
