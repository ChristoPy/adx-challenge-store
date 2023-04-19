import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { CartItem, Product } from '~/types'

interface State {
  all: CartItem[]
  total: number
}

export const state = () => ({
  all: [],
  total: 0,
}) as State

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  items: state => state.all.filter(item => item.quantity > 0),
  total: state => state.all.reduce((total, item) => total + item.product.price * item.quantity, 0),
  isProductInCart: state => (product: Product) => state.all.some(item => item.product._id === product._id),
}

export const mutations: MutationTree<RootState> = {
  ADD_ITEM(state: RootState, item: CartItem) {
    if (state.all.find(i => i.product._id === item.product._id)) {
      return
    }

    state.all.push(item)
  },
  REMOVE_ITEM(state: RootState, item: CartItem) {
    const index = state.all.findIndex(i => i.product._id === item.product._id)

    if (index > -1) {
      state.all.splice(index, 1)
    }
  },
  SET_QUANTITY(state: RootState, { item, quantity }: { item: CartItem; quantity: number }) {
    const index = state.all.findIndex(i => i.product._id === item.product._id)

    if (index > -1) {
      state.all[index].quantity = quantity
    }
  },
}

export const actions: ActionTree<RootState, RootState> = {
  addProduct({ commit }, product: Product) {
    commit('ADD_ITEM', {
      product,
      quantity: 1,
    })
  },
  removeProduct({ commit }, product: Product) {
    commit('REMOVE_ITEM', {
      product,
      quantity: 0,
    })
  },
  setQuantity({ commit }, { product, quantity }: { product: Product; quantity: number }) {
    commit('SET_QUANTITY', {
      item: {
        product,
        quantity,
      },
      quantity,
    })
  },
}
