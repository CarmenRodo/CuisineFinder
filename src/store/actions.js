import axiosClient from '../axiosClient'


export function searchMeals({ commit }, search) {
    // Make a GET request to the API endpoint for searching meals
  axiosClient.get(`search.php?s=${search}`).then(({ data }) => {
    // Once the response is received, update the state with the meals data
    commit('setMeals', data.meals)
  })
}

// this function searches meals by letter
export function searchMealsByLetter({ commit }, search) {
  //make a GET request to the API with the specified search letter
  axiosClient.get(`search.php?f=${search}`).then(({ data }) => {

    //update teh setLetter" mutations with the response data
    commit('setLetter', data.meals)
  })
}
