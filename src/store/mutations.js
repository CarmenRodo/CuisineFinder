// This function sets the meals in the state
export function setMeals(state, meals) {
  state.searchedMeals = meals
}

// This function sets the letter in the state
export function setLetter(state, letter) {
  state.searchedLetter = letter
}

// This function saves a dish to the state
export function saveDish(state, id) {
  state.savedDishes.push(id)
  state.savedDishesCount++
}

// This function deletes a dish from the state
export function deleteDish(state, id) {
  state.savedDishes = state.savedDishes.filter((el) => el !== id)
  state.savedDishesCount--
}

// This function sets the counter in the state
export function setCounter(state, count) {
  state.savedDishesCount = count
}