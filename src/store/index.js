import { createStore } from 'vuex'
import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

// Create a Vuex store instance
const store = createStore({
  state, // The initial state of the store
  mutations, // The mutations that modify the state
  getters, // The getters that retrieve data from the state
  actions // The actions that perform asynchronous operations
})

// Export the store instance as the default export
export default store