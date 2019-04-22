import Vue from "vue";
import Vuex from "vuex";
import personModule from "./sample.store"
import usersModule from "./users.store"

Vue.use(Vuex);
const modules = {
 sample:personModule,
 users:usersModule
}
export default new Vuex.Store({
  modules
});
