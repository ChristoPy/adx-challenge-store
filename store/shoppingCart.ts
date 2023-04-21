import { set } from 'vue'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { CartItem, Product } from '~/types'

interface State {
  all: CartItem[]
}

export const state = () =>
  ({
    all: [],
  } as State)

function maybeSaveState(state: State) {
  if (process.client) {
    localStorage.setItem('cart', JSON.stringify(state.all))
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: (state) => state.all.filter((item) => item.quantity > 0),
  total: (state) =>
    state.all.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),
  isProductInCart: (state) => (product: Product) =>
    state.all.some((item) => item.product._id === product._id),
}

export const mutations: MutationTree<RootState> = {
  SET_CART(state: RootState, cart: CartItem[]) {
    set(state, 'all', cart)
  },
  ADD_ITEM(state: RootState, item: CartItem) {
    state.all.push(item)
  },
  REMOVE_ITEM(state: RootState, item: CartItem) {
    const index = state.all.findIndex((i) => i.product._id === item.product._id)

    if (index > -1) {
      state.all.splice(index, 1)
    }
  },
  SET_QUANTITY(
    state: RootState,
    { item, quantity }: { item: CartItem; quantity: number }
  ) {
    const index = state.all.findIndex((i) => i.product._id === item.product._id)

    if (index > -1) {
      state.all[index].quantity = quantity
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  setCart({ commit }, cart: CartItem[]) {
    commit('SET_CART', cart)
  },
  addProduct({ commit, state }, product: Product) {
    if (state.all.find((i) => i.product._id === product._id)) {
      return
    }

    commit('ADD_ITEM', {
      product,
      quantity: 1,
    })
    maybeSaveState(state)
  },
  setQuantity(
    { commit, state },
    { product, quantity }: { product: Product; quantity: number }
  ) {
    if (product.quantity < quantity) {
      return
    }
    if (quantity === 0) {
      commit('REMOVE_ITEM', {
        product,
        quantity: 0,
      })
      maybeSaveState(state)
      return
    }

    commit('SET_QUANTITY', {
      item: {
        product,
        quantity,
      },
      quantity,
    })
    maybeSaveState(state)
  },
  getCart({ commit }) {
    if (process.client) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        commit('SET_CART', JSON.parse(cart))
      }
    }
  },
}
