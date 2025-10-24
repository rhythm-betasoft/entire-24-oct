// store/CartStore.js
import { defineStore } from 'pinia'

export const useProdStore = defineStore('cart', {
  state: () => ({
    cart: [] // array to store cart items
  }),

  actions: {
    addtocart(item) {
      // Check if item already exists
      const exists = this.cart.find(prod => prod.id === item.id)
      if (!exists) {
        this.cart.push({ ...item, quantity: 1 })
      } else {
        exists.quantity++
      }
    },

    removefromcart(id) {
      this.cart = this.cart.filter(item => item.id !== id)
    },

    clearCart() {
      this.cart = []
    }
  },

  getters: {
    cartCount: (state) => state.cart.length,
    totalPrice: (state) =>
      state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }
})
