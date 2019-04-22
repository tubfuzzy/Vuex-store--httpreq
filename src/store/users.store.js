import UsersService from '@/services/users.service';
const usersModule = {
  namespaced: true,
  state: {
    usersObject: Object 
  },
  mutations: {
    SET_USERS (state, obj) {
      state.usersObject = obj
    },
  },
  actions: {
    reqUser ({ commit, state }){
      UsersService.getAll().subscribe( response => {
        commit('SET_USERS', response.data) 
     });
     }
  },
  getters: {
    getUser (state) {    
      return state.usersObject
    }
  }
}
export default usersModule
