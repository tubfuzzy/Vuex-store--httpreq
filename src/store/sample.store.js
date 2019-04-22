import DashboardService from '@/services/users.service';
const personModule = {
  namespaced: true,
  state: {
    name: 'something isreal',
  },
  mutations: {
    SET_NAME (state, name) {
      state.name = name
    },
    SET_RENAME (state, name) {
      state.name = 'something isreal'
    },  
  },
  actions: {
    setName ({ commit, state }, name) {
      commit('SET_NAME', name)
    },
    setReName({ commit, state }, ) {
      commit('SET_RENAME')
    },
    // async createUser ({ commit, state }){
    // await DashboardService.getAll().subscribe( response => {
    //    commit('SET_NAME', result.response) 
    // });
    // }
  },
  getters: {
    getName (state) {
      return state.name
    }
  }
}
export default personModule
