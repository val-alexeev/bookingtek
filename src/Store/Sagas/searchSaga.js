import { takeEvery, call, put } from "redux-saga/effects";

import {
  types,
  setReturnedRecipes,
  setRecentSearches
} from "Store/Actions/actions";
import { API_KEY } from "Constants/contants";

function fetchRecipesSaga(ingredients) {
  //CHANGE_ME
  const NUMBER_OF_RECIPES = 2;
  const ingredientsList = ingredients; // CHANGE_ME write a map that reformats everything

  const recipesRequest = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsList}&number=${NUMBER_OF_RECIPES}&apiKey=${API_KEY}`;

  return fetch(recipesRequest).then(response => response.json());
}

function* requestSaga({ ingredients }) {
  const recipes = yield call(fetchRecipesSaga, ingredients);

  yield put(setReturnedRecipes(recipes));
  yield put(setRecentSearches(ingredients));
}

function* searchSaga() {
  yield takeEvery(types.SEARCH_RECIPES, requestSaga);
}

export default [searchSaga];
