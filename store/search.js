import axios from 'axios'
import a from '~/actions'

export const state = () => ({
  searchHints: [],
})

export const getters = {
  searchHints(state) {
    return state.searchHints
  },
}

export const mutations = {
  [a.SET_HINTS](state, { hints }) {
    state.searchHints = hints
  },
}

export const actions = {
  async loadSearchHints({ commit }, { query }) {
    if (query) {
      const { data: hints } = await axios.get(`http://sgs.sputnik.ru/?type=regions&query=${query}`)

      commit(a.SET_HINTS, { hints: JSON.parse(hints.slice(5, -1)) })
    }
  },
  clearHints({ commit }) {
    commit(a.SET_HINTS, { hints: [] })
  },
}
