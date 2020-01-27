import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '../services/ProductService'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    products: [],
    cart: {},
    cartItemsCount: 0,
    cartBikesCount: 0
  },

  actions: {
    loadData({ commit }) {
      ProductService.getProducts().then((response) => {
        commit('updateProducts', response.data.products)
      })
    },

    updateCart({ commit }, payload) {
      commit('updateCart', {id: payload.id, quantity: payload.quantity})
    },

    clearCart({ commit }) {
      commit('clearCart')
    }

  },

  mutations: {
    updateProducts(state, products) {
      state.products = products
    },

    updateCart(state, payload) {
      let itemId = payload.id
      let itemNewQuantity = state.cart[itemId] ? (state.cart[itemId] + payload.quantity) : payload.quantity
      Vue.set(state.cart, itemId, itemNewQuantity)
      if (itemNewQuantity == 0) {
        delete state.cart[itemId]
      }

      // Update total count of all items in shopping cart
      state.cartItemsCount += payload.quantity

      // Update total count of bikes in shopping cart
      let product = state.products.find((product) => {
        return itemId == product.id;
      });
      if (product.product_type === "bike") {
        state.cartBikesCount += payload.quantity

        if (state.cartBikesCount == 0) {
          this.dispatch('clearCart')
        }
      }
    },

    clearCart(state) {
      state.cart = {}
      state.cartItemsCount = 0
    }

  },

  getters: {
    products: state => state.products,
    cart: state => state.cart,
    cartItemsCount: state => state.cartItemsCount,
    cartBikesCount: state => state.cartBikesCount
  },

  modules: {
  }
})
