import {
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  CREATE_RECIPE,
  GET_DIETS,
  SET_SEARCH,
  SET_CURRENT_PAGE,
  SET_SORT,
  SET_ORDER,
  REMOVE_SORT,
  CLEAN_RECIPE,
} from './action-types.js';

export const cleanRecipe = () => {
  return {
    type: CLEAN_RECIPE,
    payload: {},
  };
};

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order,
  };
};

export const setSort = (diet) => {
  return {
    type: SET_SORT,
    payload: diet,
  };
};

export const removeSort = (diet) => {
  return {
    type: REMOVE_SORT,
    payload: diet,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};

export const getRecipes = () => {
  return async (dispatch) => {
    return await fetch('https://web-production-18f3.up.railway.app/recipes')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_RECIPES,
          payload: data,
        })
      )
      .catch((error) => console.log(error.message));
  };
};

export const getRecipesById = (id) => {
  let pattern =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return async (dispatch) => {
    if (id.match(pattern)) {
      return await fetch(
        `https://web-production-18f3.up.railway.app/DBrecipes/${id}`
      )
        .then((response) => response.json())
        .then((data) =>
          dispatch({
            type: GET_RECIPE_BY_ID,
            payload: data,
          })
        )
        .catch((error) => console.log(error.message));
    }
    return await fetch(
      `https://web-production-18f3.up.railway.app/recipes/${id}`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_RECIPE_BY_ID,
          payload: data,
        })
      )
      .catch((error) => console.log(error.message));
  };
};

export const createRecipe = (recipe) => {
  return async (dispatch) => {
    return await fetch('https://web-production-18f3.up.railway.app/recipes', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: CREATE_RECIPE,
          payload: data,
        })
      )
      .catch((error) => console.log(error.message));
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    return await fetch('https://web-production-18f3.up.railway.app/diets')
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_DIETS,
          payload: data,
        })
      )
      .catch((error) => console.log(error.message));
  };
};
