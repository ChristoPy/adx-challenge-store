import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Product } from '~/types'

interface State {
  all: Product[]
}

export const state = () =>
  ({
    all: [],
  } as State)

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  products: (state) => state.all,
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTS(state: RootState, products: Product[]) {
    state.all = products
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get('/products')
    commit('SET_PRODUCTS', products)
  },
}
